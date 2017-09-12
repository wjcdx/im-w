/**
 * Chinese Language Model, for char/word suggesting
 * Thanks for cncorpus.org.
**/

/* include corpus.js */

function CLM(corpus) {
    this._raw_corpus = corpus;
    this.characters = {};

    this._inflate();
}

CLM.prototype._inflate = function () {
    var _stat_char = function (c, cc, cs) {
        if (!defined(cs[c])) {
            cs[c] = new ClmCharacter(c, cc.freq, cc.p, {});
        } else {
            cs[c].freq += cc.freq;
            cs[c].p += cc.p;
        }
    };

    var that = this;
    this._raw_corpus.forEach(function (rc) {
        var cs_root = that.characters;
        var cs_curr = that.characters;
        for (var i = 0; i < rc.char.length; i++, cs_curr = cs_curr[c].next) {
            var c = rc.char.charAt(i);
            _stat_char(c, rc, cs_root);
            if (i > 0) {
                _stat_char(c, rc, cs_curr);
            }
        }
    });
};

// @chars: array of char
CLM.prototype.path = function (chars) {
    var nodes = [];
    var cs = this.characters;
    for (var i = 0; i < chars.length; i++) {
        var c = chars[i];
        var cc = cs[c];
        if (!defined(cc)) {
            return [];
        }
        nodes.push(cc);
        cs = cc.next;
    }
    return nodes;
};

// probability of @char
CLM.prototype.p = function (char) {
    var cc = this.characters[char];
    return defined(cc) ? cc.p : 0;
};

// next characters of @chars, which is a array
CLM.prototype.next = function (chars) {
    var path = this.path(chars);
    return path.length === 0 ? [] :
        path.last().next.attributes();
};

CLM.prototype.train = function (word) {
};

var clm = new CLM(clm_raw_characters);

