
/* include keymap.js */

function isPartial(later)
{
	return later > 1000;
}

function getPartialStrokesByIndex(idx)
{
	return partial_strokes[partial_nv[idx]];
}

function InputMethod(charset, keymap, clm)
{
    this.charset = charset;
    this.keymap = keymap;
    this.clm = clm;

    this.inflate();
}

InputMethod.prototype.inflate = function () {
    var _all_strokes = function (strokes) {
        return strokes.every(function (s) {
            return (!isPartial(s));
        });
    };

    var _inflate = function (strokes, inflated_strokes) {
        var as = _all_strokes(strokes);
        // if all strokes are not parts, we insert a space,
        // and then insert all strokes.
        if (as && inflated_strokes.length > 0) {
            inflated_strokes.push(space);
        }

        strokes.forEach(function (s) {
            if (!isPartial(s)) {
                // if there's a part, we should insert a space
                // for sibling strokes.
                if (!as && inflated_strokes.length > 0) {
                    inflated_strokes.push(space);
                }
                inflated_strokes.push(s);
                return;
            }

            var pss = getPartialStrokesByIndex(s);
            _inflate(pss, inflated_strokes);
        });
    };

    this.charset.forEach(function (c) {
        var inflated_strokes = [];
        _inflate(c.later, inflated_strokes);
        c.later = inflated_strokes;
    });
};

InputMethod.prototype.matchLater = function (keys, later)
{
    var _skip_borders = function (later, si) {
        while (defined(later[si]) && later[si] === space) {
            si++;
        }
        return si;
    };

    var _skip_a_border = function (later, si) {
        while (defined(later[si]) && later[si] !== space) {
            si++;
        }
        return _skip_borders(later, si);
    };

    for (var zone = null, si = 0, i = 0; i < keys.length; i++) {
        var key = keys.charAt(i);

        if (zone === null) {
            zone = this.keymap.zone(key);
        } else {
            var z = this.keymap.zone(key);
            if (z !== zone) {
                si = _skip_a_border(later, si);
                zone = z;
            }
        }

        // make sure there're strokes left to search for key
        if (si >= later.length) {
            return false;
        }

        /* strokes is assured to be exist */
        var strokes = this.keymap.strokes(key);

        /* search for key in later */
        if (!strokes.contain(later[si])) {
            return false;
        }

        /* search from next stroke next time */
        si++;
        // need not to skip borders here,
        // if we come to the end of a part, key area should be changed.
        // si = _skip_borders(later, si);
    }
    return true;
};

InputMethod.prototype.matchPattern = function (keys, pattern) {
    var ptns = this.keymap.patterns(keys.charAt(0));
    return ptns.contain(pattern);
};

InputMethod.prototype.match = function (keys, character) {
    return this.matchPattern(keys, character.first)
        && this.matchLater(keys, character.later);
};

InputMethod.prototype.char = function (keys) {
    var that = this;
    return this.charset.filter(function (c) {
        if (c.char === '们') {
            // console.log("__debug condition triggered.");
        }
        return that.match(keys, c);
    });
};

InputMethod.prototype.char_p = function (keys, p) {
    var that = this;
    return this.char(keys).filter(function (c) {
        return that.clm.p(c.char) > p;
    });
};

InputMethod.prototype._word_clm = function (chars) {
    var that = this;
    var words = [];
    chars.forEach(function (keys, index) {
        var cs = that.char_p(keys, 0);
        // N x N: if N = 0, then result = 0
        if (cs.length === 0) {
            words = [];
        }
        if (index === 0) {
            cs.forEach(function (c) {
                words.push([c]);
            });
            return;
        }
        var ws = [];
        words.forEach(function (word) {
            // 1. filter cs with clm next chars of previous char
            var chars = [];
            word.forEach(function (c) {
                chars.push(c.char);
            });
            var next_cs = that.clm.next(chars);
            // intersection of cs and next_cs
            var _ins = cs.filter(function (c) {
                return next_cs.contain(c.char);
            });
            // 2. concat this char
            _ins.forEach(function (c) {
                ws.push(word.concat([c]));
            });
        });
        words = ws;
    });
    return words;
};

InputMethod.prototype._word_suggest = function (chars) {
    var that = this;
    var words = [];
    chars.forEach(function (keys, index) {
        var cs = that.char_p(keys, 1);
        // N x N: if N = 0, then result = 0
        if (cs.length === 0) {
            words = [];
        }
        if (index === 0) {
            cs.forEach(function (c) {
                words.push([c]);
            });
            return;
        }
        var ws = [];
        words.forEach(function (word) {
            // 1. concat this char
            cs.forEach(function (c) {
                ws.push(word.concat([c]));
            });
        });
        words = ws;
    });
    return words;
};

InputMethod.prototype.word = function (chars) {
    return this._word_clm(chars)
};

InputMethod.prototype._combination = function (keys) {
    // ALL combinations:
    // We cannot predict user combinations correctly.
    // This is a lazy and stupid solution, but effective.
    var _split = function (keys, number, word, words) {
        // assure keys.length >= number
        if (keys.length === number) {
            words.push_unique(word.concat(keys.split('')));
            return;
        }
        // now we come to the last char
        if (number === 1) {
            words.push_unique(word.concat([keys]));
            return;
        }
        // 5 keys split into 2 combinations:
        // keys: KKKKK
        // numb: LLL12
        // Left = keys.length - number
        // max_length(c1) = keys.length - number + 1
        for (var i = 1; i <= keys.length - number + 1; i++) {
            _split(keys.substring(i), number - 1,
                word.concat([keys.substring(0, i)]), words);
        }
    };
    var _all_combinations = function (keys) {
        var __words = [];
        // a word has at least two chars
        for (var n = 2; n <= keys.length; n++) {
            _split(keys, n, [], __words);
        }
        return __words;
    };

    return _all_combinations(keys);
};

InputMethod.prototype.filter = function (keys) {
    if (!defined(keys) || keys === null || keys.length === 0) {
        return [];
    }
    var that = this;
    var cs = this.char(keys);
    var ws = [];
    // if (true)
    {
        this._combination(keys).forEach(function (_comb) {
            ws = ws.concat(that.word(_comb));
        });
    }
    return cs.concat(ws);
};


