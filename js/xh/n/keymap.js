/* include stroke.js  */
/* include pattern.js  */

/* 键盘映射表 */

var hengs = [heng, ti, liaheng];
var nas   = [na, dian];
var zhes  = [
	zhe,
	hengzheshu,
	hengzhepie,
	henggou,
	shuzheheng,
	shugou,
	shuzheti,
	piezheheng,
	piezhedian,
	wanshugou,
	nagou,
	hengzheshuzheheng,
	hengzheshuzheti,
	hengzheshugou,
	hengzhenagou,
	shuzhehengzheshu,
	shuzhehengzhepie,
	shuwanhenggou,
	hengzheshuzhehengzheshu,
	hengzheshuzhehengzhepie,
	hengzheshuwanhenggou,
	hengzhepiezhewanshugou,
	shuzhehengzheshugou,
	hengzheshuzhehengzheshugou,
];

var ptn_lrs = [
	pattern_lr_left_1_right_1,
	pattern_lr_left_middle_right,
	pattern_lr_left_1_right_heng_2,
	pattern_lr_left_1_right_shu_2,
	pattern_lr_left_1_right_wei_2,
	pattern_lr_left_heng_2_right_1,
	pattern_lr_left_shu_2_right_1,
	pattern_lr_left_wei_2_right_1,
	pattern_lr_left_heng_2_right_heng_2,
	pattern_lr_left_heng_2_right_shu_2,
	pattern_lr_left_heng_2_right_wei_2,
	pattern_lr_left_shu_2_right_heng_2,
	pattern_lr_left_shu_2_right_shu_2,
	pattern_lr_left_shu_2_right_wei_2,
	pattern_lr_left_wei_2_right_heng_2,
	pattern_lr_left_wei_2_right_shu_2,
	pattern_lr_left_wei_2_right_wei_2,
	pattern_lr_left_1_right_heng_many,
	pattern_lr_left_1_right_shu_many,
	pattern_lr_left_1_right_wei_many,
	pattern_lr_left_heng_many_right_1,
	pattern_lr_left_shu_many_right_1,
	pattern_lr_left_wei_many_right_1,
	pattern_lr_left_heng_many_right_heng_many,
	pattern_lr_left_heng_many_right_shu_many,
	pattern_lr_left_heng_many_right_wei_many,
	pattern_lr_left_shu_many_right_heng_many,
	pattern_lr_left_shu_many_right_shu_many,
	pattern_lr_left_shu_many_right_wei_many,
	pattern_lr_left_wei_many_right_heng_many,
	pattern_lr_left_wei_many_right_shu_many,
	pattern_lr_left_wei_many_right_wei_many,
];

var ptn_uds = [
	pattern_ud_up_1_down_1,
	pattern_ud_up_middle_down,
	pattern_ud_up_1_down_heng_2,
	pattern_ud_up_1_down_shu_2,
	pattern_ud_up_1_down_wei_2,
	pattern_ud_up_heng_2_down_1,
	pattern_ud_up_shu_2_down_1,
	pattern_ud_up_wei_2_down_1,
	pattern_ud_up_heng_2_down_heng_2,
	pattern_ud_up_heng_2_down_shu_2,
	pattern_ud_up_heng_2_down_wei_2,
	pattern_ud_up_shu_2_down_heng_2,
	pattern_ud_up_shu_2_down_shu_2,
	pattern_ud_up_shu_2_down_wei_2,
	pattern_ud_up_wei_2_down_heng_2,
	pattern_ud_up_wei_2_down_shu_2,
	pattern_ud_up_wei_2_down_wei_2,
	pattern_ud_up_1_down_heng_many,
	pattern_ud_up_1_down_shu_many,
	pattern_ud_up_heng_many_down_1,
	pattern_ud_up_shu_many_down_1,
	pattern_ud_up_heng_many_down_heng_many,
	pattern_ud_up_heng_many_down_shu_many,
	pattern_ud_up_heng_many_down_wei_many,
	pattern_ud_up_shu_many_down_heng_many,
	pattern_ud_up_shu_many_down_shu_many,
	pattern_ud_up_shu_many_down_wei_many,
	pattern_ud_up_wei_many_down_heng_many,
	pattern_ud_up_wei_many_down_shu_many,
	pattern_ud_up_wei_many_down_wei_many,
];

var ptn_sgl = [
	pattern_single,
];

var ptn_rds = [
	pattern_round_whole,
	pattern_round_up,
	pattern_round_down,
	pattern_round_left,
	pattern_round_right,
	pattern_round_left_up,
	pattern_round_left_down,
	pattern_round_right_up,
	pattern_round_left_right,
];

var ptn_pin = [
	pattern_pin,
];

var keys_up_left = {
	'Q': nas,
	'W': zhes,
	'E': [shu],
	'R': hengs,
	'T': [pie],
};

var keys_md_left = {
	'A': nas,
	'S': zhes,
	'D': [shu],
	'F': hengs,
	'G': [pie],
};

var keys_up_right = {
	'Y': nas,
	'O': zhes,
	'I': [shu],
	'U': hengs,
	'P': [pie],
};

var keys_md_right = {
	'H': nas,
	'M': zhes,
	'K': [shu],
	'J': hengs,
	'L': [pie],
};

var keys_down = {
	'N': nas,
	'Z': zhes,
	'X': [shu],
	'C': hengs,
	'V': [pie],
};

var keys_border = {
	'B': [],
};


function KeyZone(keys, patterns)
{
	this.keys = keys;
	this.ptns = patterns;
}

var key_zone_up_left  = new KeyZone(keys_up_left, ptn_uds);
var key_zone_up_right = new KeyZone(keys_up_right, ptn_rds);
var key_zone_md_left  = new KeyZone(keys_md_left, ptn_lrs);
var key_zone_md_right = new KeyZone(keys_md_right, ptn_sgl);
var key_zone_down     = new KeyZone(keys_down, ptn_pin);

var key_zones = [
    key_zone_up_left,
    key_zone_up_right,
    key_zone_md_left,
    key_zone_md_right,
    key_zone_down
];

function Key(key, strokes, zone) {
    this.key = key;
    this.strokes = strokes;
    this.zone = zone;
}

function KeyMap(keys) {
	var that = this;
	keys.forEach(function (key) {
	    that[key.key] = key;
    });
}

KeyMap.prototype._addKey = function (key) {
    this[key.key] = key;
};

KeyMap.prototype.patterns = function (key) {
    return this[key].zone.ptns;
};

KeyMap.prototype.strokes = function (key) {
    return this[key].strokes;
};

KeyMap.prototype.zone = function (key) {
    return this[key].zone;
};

KeyMap.prototype.end = function (key) {
    var z = this.zone(key);
    return [key_zone_md_right, key_zone_down].contain(z);
};

var keymap = new KeyMap([]);
key_zones.forEach(function (zone) {
    for (var k in zone.keys) {
        keymap._addKey(new Key(k, zone.keys[k], zone));
    }
});

