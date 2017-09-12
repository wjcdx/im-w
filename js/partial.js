/* include partial_no.js */

var partial_strokes = {
	/* 横起 */
	h_one           : [heng],  /* 一 */
	h_two           : [liaheng],  /* 二 */
	h_three         : [liaheng, heng],  /* 三 */
	h_five          : [heng, shu, hengzheshu, heng],  /* 五 */
	h_seven         : [heng, shuwanhenggou],  /* 七 */
	h_ten           : [heng, shu],  /* 十 */
	h_chang         : [heng, pie],  /* 厂 */
	h_ding          : [heng, shugou],  /* 丁 */
	h_gan           : [liaheng, shu],  /* 干 */
	h_yushi         : [liaheng, shugou],  /* 于，于是 */
	h_kui			 : [liaheng, shuzhehengzheshugou], /* 亏 */
	h_shi           : [heng, shu, heng],  /* 士 */
	h_gong          : [heng, shu, heng],  /* 工 */
	h_tu            : [heng, shu, heng],  /* 土 */
	h_cai           : [heng, shugou, pie],  /* 才 */
	h_cun           : [heng, shugou, dian],  /* 寸 */
	h_xia           : [heng, shu, dian],  /* 下 */
	h_da            : [heng, pie, na],  /* 大 */
	h_zhang         : [heng, pie, na],  /* 丈 */
	h_yuni			 : [heng, shuzhehengzheshugou, heng],  /* 与 */
	h_wan           : [heng, hengzheshugou, pie],  /* 万 */
	h_feng          : [liaheng, heng, shu],  /* 丰 */
	h_wang          : [liaheng, shu, heng],  /* 王 */
	h_jing          : [liaheng, pie, shu],  /* 井 */
	h_kai           : [liaheng, pie, shu],  /* 开 */
	h_fu            : [liaheng, pie, na],  /* 夫 */
	h_tian          : [liaheng, pie, na],  /* 天 */
	h_wuyou         : [liaheng, pie, shuwanhenggou],  /* 无 */
	h_zhuan         : [liaheng, shuzhehengzhepie, dian],  /* 专 */
	h_mu            : [heng, shu, pie, na],  /* 木 */
	h_bu            : [heng, pie, shu, dian],  /* 不 */
	h_tai           : [heng, pie, na, dian],  /* 太 */
	h_quan          : [heng, pie, na, dian],  /* 犬 */
	h_youqi			: [heng, pie, shuwanhenggou, dian],  /* 尤 */
	h_che           : [heng, piezheheng, heng, shu],  /* 车 */
	h_ju            : [heng, shuzheheng, hengzheshu, heng],  /* 巨 */
	h_ya            : [heng, piezheheng, shugou, pie],  /* 牙 */
	h_tun           : [heng, shuzheheng, shu, shuwanhenggou],  /* 屯 */
	h_hu			: [heng, piezheheng, hengzhepie, heng],  /* 互 */
	h_wa            : [heng, shuzheti, hengzhenagou, dian],  /* 瓦 */
	h_gai           : [heng, shu, heng, shuzhehengzheshugou],  /* 丐 */
	h_dai           : [heng, pie, hengzhepie, dian],  /* 歹 */
	h_ge            : [heng, nagou, pie, dian],  /* 戈 */
	h_yu            : [liaheng, shu, heng, dian],  /* 玉 */
	h_mo            : [liaheng, shu, pie, na],  /* 末 */
	h_weilai        : [liaheng, shu, pie, na],  /* 未 */
	h_jida          : [liaheng, shu, shuzheheng, shu],  /* 击，打 */
	h_zheng         : [heng, shu, heng, shu, heng],  /* 正 */
	h_ganku         : [heng, shu, shu, liaheng],  /* 甘 */
	h_shijie        : [heng, shu, shu, heng, shuzheheng],  /* 世 */
	h_ben           : [heng, shu, pie, na, heng],  /* 本 */
	h_shudao		: [heng, shu, pie, na, dian],  /* 术, 士 */
	h_bing          : [heng, shu, hengzheshugou, pie, na],  /* 丙 */
	h_stone         : [heng, pie, shu, hengzheshu, heng],  /* 石 */
	h_long          : [heng, pie, shuwanhenggou, pie, dian],  /* 龙 */
	h_ping          : [heng, dian, pie, heng, shu],  /* 平 */
	h_dong          : [heng, piezheheng, shugou, pie, dian],  /* 东 */
	h_erduo         : [heng, shu, shu, liaheng, heng],  /* 耳 */
	h_yazhou        : [heng, shu, shu, dian, pie, heng],  /* 亚 */
	h_chen          : [heng, shu, hengzheshu, heng, shu, shuzheheng],  /* 臣 */
	h_zai			: [heng, shu, hengzheshugou, shu, liaheng],  /* 再 */
	h_xi            : [heng, shu, hengzheshu, pie, shuzheheng, heng],  /* 西 */
	h_hundred		: [heng, pie, shu, hengzheshu, liaheng],  /* 百 */
	h_erqie         : [heng, pie, shu, hengzheshugou, shu, shu],  /* 而 */
	h_ye            : [heng, pie, shu, hengzheshu, pie, dian],  /* 页 */
	h_si			: [heng, pie, hengzhepie, dian, pie, shuwanhenggou],  /* 死 */
	h_cheng         : [heng, pie, hengzheshugou, nagou, pie, dian],  /* 成 */
	h_jia           : [heng, dian, pie, heng, pie, na],  /* 夹 */
	h_wei           : [liaheng, hengzheshugou, shu],  /* 韦 */
	h_li            : [heng, shu, hengzheshu, heng, pie, na],  /* 吏 */
	h_yi            : [heng, hengzheshu, heng, shuzhehengzheshugou, pie, na],  /* 夷 */
	h_yan           : [heng, shu, shu, dian, pie, heng, pie],  /* 严 */
	h_qiu           : [heng, shugou, dian, ti, pie, na, dian],  /* 求 */
	h_geng          : [heng, shu, hengzheshu, liaheng, pie, na],  /* 更 */
	h_shufu			: [heng, shu, hengzheshu, heng, shu, pie, na],  /* 束 */
	h_liang         : [heng, shu, hengzheshugou, pie, dian, pie, dian],  /* 两 */
	h_lai			: [heng, dian, pie, heng, shu, pie, na],  /* 来 */
	h_fudu          : [heng, shu, hengzheshugou, liaheng, shu, dian],  /* 甫 */
	h_shiqing		: [heng, shu, hengzheshu, heng, hengzheshu, liaheng, shugou],  /* 事，情 */
	h_yushui        : [heng, shu, hengzheshugou, shu, dian, dian, dian, dian],  /* 雨 */
	h_gexing		: [heng, shu, shu, heng, shu, hengzheshu, liaheng, shu],  /* 革，新 */
	h_mian			: [heng, pie, shu, hengzheshu, shu, shu, liaheng, heng],  /* 面 */
	h_jian          : [heng, shu, hengzheshu, dian, pie, heng, shu, pie, na],  /* 柬 */
	h_youxin        : [heng, shu, hengzheshu, pie, shuzheheng, heng, heng],  /* 酉，辛 */
	h_wuxu          : [heng, pie, nagou, pie, dian],  /* 戊 */
	h_wuzidi        : [heng, pie, shuwanhenggou],  /* 兀 */
	h_yiyou			: [heng, nagou, dian],  /* 弋，游 */
	h_nian			: [heng, shu, shu, heng],  /* 廿 */
	h_miangai		: [heng, shu, shuzheheng, hengzheshugou],  /* 丏 */
	h_sa			: [heng, pie, shu, shu],  /* 卅 */
	h_lei			: [liaheng, heng, shu, pie, na],  /* 耒 */
	h_zhizhu        : [heng, pie, wanshugou, pie, pie, pie, dian],  /* 豕 */
	h_pang			: [heng, pie, shuwanhenggou, pie, pie, pie, dian],  /* 尨 */

	h_tishoupang	: [heng, shugou, ti],  /* 提 */
	h_caozitou		: [heng, shu, shu],  /* 草 */
	h_jiangzikuang	: [heng, shuzheheng],  /* 匠 */
	h_hengpie       : [heng, pie],  /* 左，左上 */
	h_bizizuo		: [heng, shuzheti],  /* 比，左边 */
	h_qiezizuo		: [heng, shuzheti],  /* 切，左边 */
	h_qiaoziyou     : [heng, shuzhehengzheshugou],  /* 巧, 右边 */
	h_shizikuang	: [heng, nagou, dian],  /* 式 */
	h_laozitou		: [heng, shu, heng, pie],  /* 老 */
	h_hengjin		: [heng, shu, hengzheshugou, shu],  /* 师，右边 */
	h_mugou         : [heng, shugou, pie, dian],  /* 杀，下部 */
	h_piecao        : [heng, pie, shu],  /* 异，下部 */
	h_piecaobuchu	: [heng, pie, shu],  /* 痹，里下部 */
	h_zaizitou      : [heng, pie, shu],  /* 在，去土 */
	h_zangzikuang	: [heng, pie, shuzheheng, heng, pie, nagou, pie, dian],  /* 臧，外框 */
	h_piefeng       : [liaheng, heng, pie],  /* 寿，上部 */
	h_qingzitou     : [liaheng, shu, heng],  /* 青，上部 */
	h_jiezikuang	: [heng, nagou, pie, dian],  /* 戒，外框 */
	h_xingziyou     : [liaheng, shugou],  /* 行，右边 */
	h_yuzidi        : [liaheng, shugou, pie, dian],  /* 余，下部 */
	h_fengzidi      : [liaheng, shu],  /* 奉，下部 */
	h_shushi        : [heng, shu, hengzheshugou, shu],  /* 肺，右边 */
	h_fengzitou     : [liaheng, heng, pie, na],  /* 奉，上部 */
	h_wuzikuang		: [liaheng, nagou, dian],  /* 武，外框 */
	h_hengpiedian	: [heng, pie, dian],  /* 拔，右除又 */
	h_jianziyou     : [heng, piezheheng, hengzheshugou, pie, dian],  /* 拣，右边 */
	h_cizizuo       : [heng, shu, hengzheshugou, shu, pie, dian, shu, shugou],  /* 刺，左边 */
	h_shixue        : [heng, hengzheshu, liaheng, shu],  /* 妻，上部 */
	h_zhizitou		: [heng, piezheheng, dian],  /* 至，上部 */
	h_gongzitou		: [heng, shu, shu, heng],  /* 共，上部 */
	h_jinxia        : [liaheng, shu, dian, pie, heng],  /* 金，下部 */
	h_zhan          : [liaheng, nagou, pie, dian],  /* 栈，右边 */
	h_shizidi		: [heng, shu, heng, pie, na],  /* 是，下边 */
	h_jiangyouxia   : [heng, piezheheng, shu],  /* 降，右下 */
	h_gewudian      : [heng, nagou, pie],  /* 戈，无点 */
	h_nue           : [heng, shuzheheng, heng],  /* 虐，里面 */
	h_xianzikuang	: [heng, pie, nagou, pie, dian],  /* 咸，外框 */
	h_weizidi		: [heng, shuzheti, pie, na],  /* 畏，下部 */
	h_baiziyou      : [liaheng, liaheng, shu],  /* 拜，右边 */
	h_caoheng       : [heng, shu, shu, heng],  /* 革，上部 */
	h_yangzizh      : [liaheng, heng, pie, na],  /* 养，中部 */
	h_yangzishen	: [liaheng, heng, shu],  /* 羊，下部 */
	h_jiziyou       : [heng, piezheheng, pie, shuwanhenggou],  /* 既，右边 */
	h_zaizikuang	: [heng, shu, heng, nagou, pie, dian],  /* 栽，去木 */
	h_hengxiapie    : [heng, pie],  /* 夏，最上 */
	h_sizizuo       : [heng, shu, liaheng, heng, piezheheng, dian],  /* 肆，左边 */
	h_jieziyou      : [heng, hengzheshu, liaheng, shu, heng, pie, na],  /* 捷，右边 */
	h_zhuoziyou		: [heng, pie, wanshugou, pie, pie, pie, dian, dian],  /* 啄，右边 */
	h_hengcun		: [liaheng, shugou, dian],  /* 得，右下 */
	h_caoczitou		: [heng, shu, hengzheshu, heng, shu, shu, heng],  /* 曹，上部 */
	h_yuezili       : [heng, shuzheti, nagou, pie, dian],  /* 越，里面 */
	h_xiwuzhe       : [heng, shu, hengzheshu, shu, shu, heng],  /* 要，上部 */
	h_dingwugou     : [heng, shu],  /* 哥，上框 */
	h_qizitou       : [heng, shu, shu, liaheng, heng],  /* 其，上面 */
	h_huizitou      : [heng, shu, hengzheshu, liaheng, shu, heng, dian],  /* 惠，上部 */
	h_sanhls        : [liaheng, shu, shu, heng],  /* 塞，中上 */
	h_qiangzitou    : [heng, shu, dian, pie, heng],  /* 墙，右上 */
	h_daizitou      : [heng, shu, shu, shu],  /* 带，最上 */
	h_hengsishu		: [heng, shu, shu, shu, shu],  /* 舞，一横四竖 */
	h_liaoyoush     : [heng, pie, na, dian, pie],  /* 燎，右上 */
	h_yinzizhong    : [heng, shu, hengzheshu, heng, shu, heng],  /* 寅，中部 */
	h_yuwuheng      : [heng, shuzhehengzheshugou],  /* 与，无下横 */
	h_jimei         : [heng, shu, shu, hengzheshu, heng, shu, shuzheheng],  /* 姬，右边，美 */
	h_hengjiatui	: [heng, pie, dian],  /* 六，去点, 横加腿 */
	h_guazizhong    : [heng, pie, shu, hengzheshu, liaheng, heng],  /* 寡，中部 */
	h_nangzitou     : [heng, shu, hengzheshu, heng, shu],  /* 囊，最上 */
	h_yazili		: [heng, shu, heng, dian],  /* 压，里面 */
	h_jianzishen	: [heng, hengzheshu, liaheng, shu, shu, pie, na],  /* 兼 */
	h_pieyangdi		: [liaheng, heng, pie],  /* 差, 中间 */
	h_youwudian		: [heng, pie, shuwanhenggou],  /* 尤，无点 */
	h_qiangzishen	: [liaheng, heng, pie, shuwanhenggou],  /* 羌，下部 */
	h_xunyuzikuang		: [heng, nagou, pie, pie, pie, dian],  /* 彧，围部 */
	h_chefanti		: [heng, shu, hengzheshu, liaheng, heng, shu],  /* 车，繁体 */
	h_chexiong		: [heng, shu, hengzheshu, liaheng, heng, shu, shuzheheng, shu],  /* 墼, 上左 */
	h_mafanti		: [heng, shu, liaheng, shu, hengzheshugou, dian, dian, dian, dian],  /* 馼,左边 */
	h_sizuoshang	: [heng, shu, liaheng, heng],  /* 肆, 左上 */
	h_fanhuaxia		: [liaheng, shu, shu, liaheng, shu],  /* 嬅, 右下  */
	h_yuzikuang		: [heng, shu, hengzheshugou, shu],  /* 雨，外框  */
	h_dongfanti		: [heng, shu, hengzheshu, liaheng, shu, pie, na],  /* 蝀, 右边 */
	h_zhuodian		: [heng, wanshugou, pie, pie, pie, dian, dian],  /* 椓,右边 */
	h_banie			: [heng, pie, shu, shu, heng, na],  /* 嵽,右上 */
	h_yafanti		: [heng, shu, heng, shuzhehengzheshu, shuzhehengzheshu, heng, shu, heng],  /* 噁, 右上 */


	h_geming		: [h_caoheng, s_gezidi],  /* 革, 命 */
	h_qishi			: [h_qizitou, p_eightdian],  /* 其, 实 */
	h_doufu			: [heng, s_kou, d_qianzitou],  /* 豆，腐 */
	h_maiqian		: [h_ten, henggou, d_tou],  /* 卖，钱 */
	h_guantou		: [h_caozitou, s_kou, s_kou, p_quezipang],  /* 罐，右边 */
	h_gudong		: [h_shi, s_kou, d_qianzitou, h_ten, z_you],  /* 鼓，动 */
	h_zhenshi		: [h_ten, s_juzitou, p_eightdian],  /* 真，实 */
	h_yifanti		: [h_shi, d_tubaogai, heng, s_kou, d_qianzitou],  /* 真，实 */
	h_geding		: [heng, s_kou, s_tongzikuang, d_gezili],  /* 隔，右边 */
	h_zoulu			: [h_tu, s_zouzidi],  /* 走,路 */
	h_rangong		: [h_sizizuo, p_sanpie],  /* 髯，上部 */
	h_nangkuo		: [h_nangzitou, d_tubaogai, s_kou, s_kou, h_sanhls, p_yizidi],  /* 囊，括 */
	h_bijiao		: [h_bizizuo, p_bi],  /* 囊，括 */
	h_yuncai		: [h_two, z_sigong],  /* 云,彩 */
	h_zhichi		: [h_ten, z_you],  /* 支,持 */
	h_yuanlao		: [h_two, p_er],  /* 元,老 */
	h_hongxia		: [h_hengpie, z_sigong],  /* 宏,下部 */
	h_quliu			: [h_tu, z_sigong],  /* 去，留 */
	h_gongtong		: [h_gongzitou, p_eightdian],  /* 共，同 */
	h_zhiyu			: [h_zhizitou, h_tu],  /* 至，于 */
	h_gudai			: [h_ten, s_kou],  /* 古，代 */
	h_buliao		: [h_hengpie, s_jin],  /* 布,料 */
	h_baziyou		: [h_hengpiedian, z_you],  /* 拔，右边 */
	h_laoren		: [h_laozitou, p_bi],  /* 老, 人 */
	h_gengu			: [heng, s_ri, heng],  /* 亘，古 */
	h_yaotang		: [h_gewudian, h_wuzidi],  /* 尧，唐 */
	h_chenxing		: [h_chang, h_two, z_sangzidi],  /* 辰, 星 */
	h_changfanti	: [h_sizuoshang, z_sangzidi],  /* 長 */
	h_shizhong		: [h_two, z_xiao],  /* 示, 众 */
	h_simiao		: [h_tu, h_cun],  /* 寺, 庙 */
	h_keyi			: [h_tu, h_cun],  /* 寺, 庙 */
	h_youbian		: [h_hengpie, s_kou],  /* 右，边 */
	h_youwu			: [h_hengpie, p_yue],  /* 有，无 */
	h_bofa			: [h_ten, d_tubaogai, z_zi],  /* 勃，左边 */
	h_shenzhi		: [h_qizitou, p_eightdian, shuzheheng],  /* 甚，至 */
	h_qiji			: [h_da, h_keyi],  /* 奇，迹 */
	h_qubie			: [h_jiangzikuang, p_chadian],  /* 区，别 */
	h_lingxing		: [h_tu, p_eightdian, p_zhewen],  /* 菱，形，下部 */
	h_huozhe		: [h_ge, s_kou, ti],  /* 或，者 */
	h_xiandan		: [h_xianzikuang, heng, s_kou],  /* 咸，淡 */
	h_xingfu		: [h_tu, d_lanzitou, h_tu],  /* 幸，福 */
	h_huahua		: [heng, s_tian, z_xiongzikuang],  /* 画,画 */
	h_wushu			: [h_wuzikuang, s_zhi],  /* 武，术 */
	h_moyao			: [h_caozitou, s_ri, h_da],  /* 莫，要 */
	h_yefanti		: [h_hengxiapie, s_mu, p_eightdian],  /* 頫，右边 */
	h_biaoshi		: [h_qingzitou, p_yizidi],  /* 表，示 */
	h_qiyue			: [h_feng, z_dao, h_da],  /* 契，约 */
	h_nanfang		: [h_ten, s_tongzikuang, d_xinzidi],  /* 南, 方 */
	h_zuobian		: [h_hengpie, h_gong],  /* 左，边 */
	h_aoyou			: [h_qingzitou, z_fangzidi],  /* 遨，里面 */
	h_chise			: [h_tu, p_yizidi],  /* 赤,色 */
	h_xitu			: [h_xiwuzhe, h_tu],  /* 湮，右边 */
	h_qingcao		: [h_qingzitou, p_yue],  /* 青，草 */
	h_zhijie		: [h_ten, s_juzitou],  /* 直，接 */
	h_ertu			: [h_tu, h_tu],  /* 圭 */
	h_suoqu			: [h_ten, d_tubaogai, p_yao, z_xiao],  /* 索，取 */
	h_youqing		: [h_hengpie, z_you],  /* 友，情 */
	h_chaozuo		: [h_ten, s_ri, h_ten],  /* 朝，左边 */
	h_lifei			: [heng, s_lixiaban, s_lixiaban],  /* 丽，妃 */
	h_jinhua		: [h_caoheng, s_jinzidi],  /* 瑾，右边，花 */
	h_hanfanti		: [h_caoheng, s_hanyouxia],  /* 漢，右边 */
	h_xiai			: [h_shi, s_kou, d_qianzitou, s_kou],  /* 喜，爱 */
	h_huangse		: [h_gongzitou, s_you, p_eightdian],  /* 黄，色 */
	h_yisheng		: [h_jiangzikuang, p_shi],  /* 医，生 */
	h_mengmian		: [h_caozitou, d_tubaogai, heng, h_zhizhu],  /* 蒙，面 */
	h_liaowang		: [h_liaoyoush, s_ri, z_xiao],  /* 瞭，右边，望 */
	h_wu			: [h_five, s_kou],  /* 吾 */



	/* 竖起 */
	s_four          : [shu, hengzheshu, pie, shuzheheng, heng],  /* 四 */
	s_bu            : [shu, dian],  /* 卜 */
	s_shang			: [shu, liaheng],  /* 上 */
	s_kou           : [shu, hengzheshu, heng],  /* 口 */
	s_jin           : [shu, hengzheshugou, shu],  /* 巾 */
	s_shan          : [shu, shuzheheng, shu],  /* 山 */
	s_zhi           : [shu, heng, shu, heng],  /* 止 */
	s_shao          : [shu, pie, dian, pie],  /* 少 */
	s_ri            : [shu, hengzheshu, liaheng],  /* 日 */
	s_zhong         : [shu, hengzheshu, heng, shu],  /* 中 */
	s_bei           : [shu, hengzheshu, pie, dian],  /* 贝 */
	s_nei           : [shu, hengzheshugou, pie, dian],  /* 内 */
	s_jian          : [shu, hengzheshu, pie, shuwanhenggou],  /* 见 */
	s_ka			: [shu, liaheng, shu, dian],  /* 卡 */
	s_ye            : [shu, shu, dian, pie, heng],  /* 业 */
	s_qie           : [shu, hengzheshu, liaheng, heng],  /* 且 */
	s_mu            : [shu, hengzheshu, liaheng, heng],  /* 目 */
	s_jia           : [shu, hengzheshu, liaheng, shu],  /* 甲 */
	s_shen          : [shu, hengzheshu, liaheng, shu],  /* 申 */
	s_tian          : [shu, hengzheshu, heng, shu, heng],  /* 田 */
	s_you           : [shu, hengzheshu, heng, shu, heng],  /* 由 */
	s_dian          : [shu, hengzheshu, liaheng, shuwanhenggou],  /* 电 */
	s_shi           : [shu, hengzheshu, heng, pie, na],  /* 史 */
	s_yang          : [shu, hengzheshu, heng, pie, na],  /* 央 */
	s_tu			: [shu, heng, shu, hengzheshuzhehengzheshu, heng],  /* 凸 */
	s_ao			: [shu, hengzheshuzheheng, shu, hengzheshu, heng],  /* 凹 */
	s_minzidi		: [shu, hengzheshu, shu, shu, heng],  /* 监 */
	s_chong         : [shu, hengzheshu, heng, shu, heng, dian],  /* 虫 */
	s_qu			: [shu, hengzheshu, heng, shu, shu, heng],  /* 曲 */
	s_rou			: [shu, hengzheshugou, pie, dian, pie, dian],  /* 肉 */
	s_li            : [shu, hengzheshu, liaheng, shu, liaheng],  /* 里 */
	s_zu            : [shu, hengzheshu, heng, shu, heng, pie, na],  /* 足 */
	s_chuan         : [shu, hengzheshu, heng, shu, hengzheshu, heng, shu],  /* 串 */
	s_guo           : [shu, hengzheshu, liaheng, heng, shu, pie, na],  /* 果 */
	s_yu            : [shu, hengzheshu, liaheng, shu, hengzheshugou, shu, heng, dian],  /* 禺 */
	s_ran			: [shu, hengzheshugou, shu, liaheng],  /* 冉 */
	s_yeyao			: [shu, hengzheshu, liaheng, nagou, pie],  /* 曳，摇 */

	s_tongzikuang	: [shu, hengzheshugou],  /* 同 */
	s_lidaopang		: [shu, shugou],  /* 刚 */
	s_shangzitou	: [shu, heng],  /* 上 */
	s_guangzitou	: [shu, dian, pie],  /* 光 */
	s_lixiaban		: [shu, hengzheshugou, dian],  /* 丽，下半 */
	s_shaowud       : [shu, pie, pie],  /* 步，下部 */
	s_liangshu      : [shu, shu],  /* 竖，上左 */
	s_huzipang		: [shu, heng, henggou, pie],  /* 虎, 围部 */
	s_juzitou       : [shu, hengzheshu, liaheng, liaheng],  /* 具，上边 */
	s_dianzitou     : [shu, hengzheshu, heng, shu, shu, heng],  /* 典，上面 */
	s_siwuzhe       : [shu, hengzheshu, shu, shu, heng],  /* 罗，上面 */
	s_guanzidi      : [shu, hengzheshu, heng, hengzheshu, heng],  /* 官，下面 */
	s_guanzitou     : [shu, hengzheshu, heng, shu, heng],  /* 贯 */
	s_zouzidi       : [shu, heng, pie, na],  /* 走，下面 */
	s_daori         : [shu, hengzheshu, shu, heng],  /* 临，右下 */
	s_guizitou      : [shu, hengzheshu, heng, shu, heng],  /* 贵，上部 */
	s_shupie        : [shu, pie],  /* 帅，左边 */
	s_guzitou       : [shu, hengzheshu, hengzheshu],  /* 骨，去月, 去秃宝盖 */
	s_bianzili      : [shu, hengzheshugou, heng, shu, shu],  /* 扁，里面 */
	s_feizizuo		: [shu, liaheng, heng],  /* 非，左边 */
	s_feiziyou		: [shu, liaheng, heng],  /* 非，右边 */
	s_yangwutou		: [shu, hengzheshu, heng, pie, na],  /* 奂，下边 */
	s_hguankou      : [shu, hengzheshu, liaheng],  /* 衰，中间，横贯口 */
	s_danzidi       : [shu, hengzheshu, liaheng, heng, shu],  /* 单，下部 */
	s_heizitou      : [shu, hengzheshu, dian, pie, heng, shu, liaheng],  /* 黑，上部 */
	s_zengzizh      : [shu, hengzheshu, shu, dian, pie, heng],  /* 曾，中间 */
	s_jinzidi		: [shu, hengzheshu, liaheng, shu, heng],  /* 菫，下边 */
	s_dingxiayou    : [shu, heng, shu, hengzheshu],  /* 鼎，下右 */
	s_dianshui      : [shu, dian, ti, pie, dian],  /* 犀，里上 */
	s_beizizuo      : [shu, heng, ti],  /* 北，左边 */
	s_gezidi        : [shu, hengzheshu, liaheng, shu],  /* 革，下面 */
	s_tuzishen		: [shu, hengzheshu, heng, pie, shuwanhenggou, dian],  /* 兔, 下面 */
	s_mianzishen	: [shu, hengzheshu, heng, pie, shuwanhenggou],  /* 免, 下面 */
	s_xiangzishen	: [shu, hengzheshu, heng, pie, wanshugou, pie, pie, pie, dian],  /* 象，下部 */
	s_guizishen		: [shu, hengzheshu, liaheng, shuwanhenggou],  /* 龟, 下部 */
	s_zuzipang		: [shu, hengzheshu, heng, shu, heng, shu, ti],  /* 跟，左边 */
	s_youzishen		: [shu, hengzheshu, hengzheshu, heng, heng],  /* 卣，下部 */
	s_guanyouxia	: [shu, pie, pie, na, na],  /* 鳏，右下 */
	s_xiaowugou		: [shu, pie, dian],  /* 小，无勾 */
	s_shuhengzuo	: [shu, heng],  /* 芈,上左 */
	s_menfanti		: [shu, hengzheshu, heng, heng, shu, hengzheshugou, heng, heng],  /* 門 */
	s_guifanti		: [shu, hengzheshu, liaheng, shu, shuwanhenggou, heng, shu, liaheng, hengzheshu, liaheng],  /* 鄳,左边 */
	s_xiakuang		: [shu, hengzheshu],  /* 㻒, 右框 */
	s_kuanglou		: [shu, hengzheshu, liaheng, shu, shu, hengzheshu, heng],  /* 塿, 右上 */
	s_hanyouxia		: [shu, hengzheshu, liaheng, heng, pie, na],  /* 漢，右下 */
	s_qiewuheng		: [shu, hengzheshu, liaheng],  /* 且，无下横 */



	s_hebu			: [s_ri, p_baozitou, p_ren, shuzheheng],  /* 曷, 不 */
	s_manmiao		: [s_ri, s_siwuzhe, z_you],  /* 曼,妙 */
	s_heiye			: [s_heizitou, d_sidiandi],  /* 黑，夜 */
	s_tongxue		: [s_tongzikuang, heng, s_kou],  /* 同，学 */
	s_bufa			: [s_zhi, s_shaowud],  /* 步，伐 */
	s_jingse		: [s_ri, d_jingdu],  /* 景，色 */
	s_quqiubai		: [s_mu, s_mu, p_quezipang],  /* 瞿秋白 */
	s_haojiao		: [s_kou, h_qiaoziyou],  /* 号，角 */
	s_huer			: [s_huzipang, h_seven, p_ji],  /* 虎 */
	s_gutou			: [s_guzitou, d_tubaogai, p_yue],  /* 骨，头 */
	s_shushan		: [s_siwuzhe, p_baozitou, s_chong],  /* 蜀，山 */
	s_juequ			: [s_mu, s_mu, p_quezipang, z_you],  /* 攫, 右边 */
	s_zhanyou		: [s_shangzitou, s_kou],  /* 占,有 */
	s_gang			: [s_tongzikuang, p_chadian],  /* 冈 */
	s_guangming		: [s_guangzitou, h_wuzidi],  /* 冈 */
	s_cici			: [s_zhi, p_bi],  /* 此，次 */
	s_xiongdi		: [s_kou, p_er],  /* 兄，弟 */
	s_zhiyou		: [s_kou, p_eightdian],  /* 只,有 */
	s_danxi			: [s_ri, heng],  /* 旦，夕 */
	s_yinwei		: [s_kou, h_da],  /* 因，为 */
	s_zhuoyue		: [s_shangzitou, s_ri, h_ten],  /* 卓，越 */
	s_chilun		: [s_zhi, p_ren, z_xiongzikuang],  /* 齿，轮 */
	s_danran		: [s_guangzitou, z_xunzitou],  /* 当，然 */
	s_shifei		: [s_ri, h_shizidi],  /* 是，非 */
	s_feiyi			: [s_feizizuo, s_feiziyou],  /* 非, 议 */
	s_zhenjie		: [s_shangzitou, s_bei],  /* 贞，洁 */
	s_tangli		: [s_guangzitou, d_tubaogai, s_kou],  /* 棠，去木，梨 */
	s_wendu			: [s_ri, s_minzidi],  /* 温，右边，度 */
	s_xiaoxiang		: [s_guangzitou, p_yue],  /* 肖，像 */
	s_huanzhen		: [s_siwuzhe, heng, s_kou, p_yizidi],  /* 嬛,右边，甄 */
	s_zaochen		: [s_ri, h_ten],  /* 早，晨 */
	s_jiongpo		: [s_tongzikuang, p_eightdian, s_kou],  /* 冏，迫 */
	s_yemei			: [s_ye, d_lanzitou, h_yangzizh],  /* 醭,右边 */



	/* 撇起 */
	p_eight         : [pie, na],  /* 八 */
	p_eightdian		: [pie, dian],  /* 贝，只，下部 */
	p_nine          : [pie, hengzheshuwanhenggou],  /* 九 */
	p_ren           : [pie, na],  /* 人 */
	p_ru            : [pie, na],  /* 入 */
	p_ji            : [pie, hengzheshuwanhenggou],  /* 几 */
	p_er            : [pie, shuwanhenggou],  /* 儿 */
	p_thousand      : [pie, heng, shu],  /* 千 */
	p_chuan         : [pie, shu, shu],  /* 川 */
	p_ge			: [pie, na, shu],  /* 个 */
	p_jiuyuan		: [pie, hengzhepie, na],  /* 久 */
	p_fan           : [pie, hengzheshuwanhenggou, dian],  /* 凡 */
	p_jige          : [pie, hengzheshuzhehengzhepie, na],  /* 及，格 */
	p_xi            : [pie, hengzhepie, dian],  /* 夕 */
	p_wan           : [pie, hengzheshuwanhenggou, dian],  /* 丸 */
	p_me			: [pie, piezheheng, dian],  /* 么 */
	p_bi            : [pie, shuwanhenggou],  /* 匕 */
	p_wu            : [pie, liaheng, shu],  /* 午 */
	p_niu           : [pie, liaheng, shu],  /* 牛 */
	p_shou          : [pie, liaheng, shugou],  /* 手 */
	p_mao           : [pie, liaheng, shuwanhenggou],  /* 毛 */
	p_qi            : [pie, liaheng, hengzhenagou],  /* 气 */
	p_shenggao		: [pie, heng, pie, shu],  /* 升 */
	p_chang         : [pie, heng, shuzheti, na],  /* 长 */
	p_pian          : [pie, shu, heng, hengzheshu],  /* 片 */
	p_bihuo			: [pie, shu, hengzheshugou, shu],  /* 币，货 */
	p_jin           : [pie, pie, heng, shu],  /* 斤 */
	p_zhao          : [pie, pie, shu, na],  /* 爪 */
	p_fu            : [pie, dian, pie, na],  /* 父 */
	p_fa            : [pie, dian, hengzhepie, na],  /* 乏 */
	p_yue           : [pie, hengzheshugou, liaheng],  /* 月 */
	p_shizu         : [pie, shuzheti, heng, nagou],  /* 氏 */
	p_wuyao         : [pie, hengzheshugou, pie, pie],  /* 勿 */
	p_dan           : [pie, hengzheshugou, heng, dian],  /* 丹 */
	p_wuya          : [pie, hengzheshugou, shuzhehengzheshugou, heng],  /* 乌 */
	p_yao           : [pie, heng, pie, na],  /* 夭 */
	p_sheng         : [pie, liaheng, shu, heng],  /* 生 */
	p_shiqu         : [pie, liaheng, pie, na],  /* 失，去 */
	p_he            : [pie, heng, shu, pie, na],  /* 禾 */
	p_qiu           : [pie, shu, heng, shu, heng],  /* 丘 */
	p_bai           : [pie, shu, hengzheshu, liaheng],  /* 白 */
	p_chi			: [pie, pie, heng, shu, dian],  /* 斥 */
	p_gua           : [pie, pie, shuzheti, dian, na],  /* 瓜 */
	p_hu            : [pie, dian, pie, heng, shugou],  /* 乎 */
	p_yong          : [pie, hengzheshugou, liaheng, shu],  /* 用 */
	p_shuai			: [pie, hengzheshugou, liaheng, shuwanhenggou],  /* 甩 */
	p_le            : [pie, shuzheheng, shugou, pie, dian],  /* 乐 */
	p_congmang		: [pie, hengzheshugou, pie, pie, dian],  /* 匆 */
	p_ce            : [pie, hengzheshugou, pie, hengzheshugou, heng],  /* 册 */
	p_niao			: [pie, hengzheshugou, dian, shuzhehengzheshugou, heng],  /* 鸟 */
	p_shi           : [pie, liaheng, pie, dian],  /* 矢 */
	p_zha           : [pie, heng, shu, liaheng],  /* 乍 */
	p_nian			: [pie, liaheng, shu, heng, shu],  /* 年 */
	p_zhu           : [pie, liaheng, shu, pie, na],  /* 朱 */
	p_zi            : [pie, shu, hengzheshu, liaheng, heng],  /* 自 */
	p_xue			: [pie, shu, hengzheshu, shu, shu, heng],  /* 血 */
	p_zhou          : [pie, pie, hengzheshugou, heng, dian, dian],  /* 舟 */
	p_rengui        : [pie, heng, shu, heng],  /* 壬 */
	p_jiu           : [pie, shu, hengzheshu, liaheng, heng],  /* 臼 */
	p_wo            : [pie, heng, shugou, ti, nagou, pie, dian],  /* 我 */
	p_di            : [pie, shuzheti, heng, nagou, dian],  /* 氐 */
	p_shen          : [pie, shu, hengzheshugou, liaheng, heng, pie],  /* 身 */
	p_chui          : [pie, heng, shu, heng, shu, pie, liaheng],  /* 垂 */
	p_bingxing		: [pie, heng, hengzheshu, liaheng, shu, pie, na],  /* 秉, 性 */
	p_zhong         : [pie, heng, shu, hengzheshu, liaheng, shu, liaheng],  /* 重 */
	p_gui           : [pie, shu, hengzheshu, liaheng, pie, shuwanhenggou, piezheheng, dian],  /* 鬼 */
	p_yu            : [pie, shu, hengzheshu, heng, shu, hengzheshugou, shu, ti, dian],  /* 禹 */
	p_yimai			: [pie, na],  /* 乂,麦 */
	p_baozipang		: [pie, dian, dian, pie, wanshugou, pie, pie],  /* 豸 */
	p_quezipang		: [pie, shu, dian, liaheng, shu, liaheng],  /* 隹 */

	p_shao          : [pie, hengzheshugou, dian],  /* 勺 */

	p_pieheng		: [pie, heng],  /* 乞，上部 */
	p_danrenpang	: [pie, shu],  /* 化 */
	p_baozitou		: [pie, hengzheshugou],  /* 包 */
	p_fanzipang		: [pie, pie],  /* 反 */
	p_dao			: [pie, shu],  /* 介，下部 */
	p_fengzitou		: [pie, hengzhenagou],  /* 凤 */
	p_chadian		: [pie, dian],  /* 区，里面 */
	p_chana			: [pie, na],  /* 爻，下部 */
	p_yinzizuo		: [pie, shuzheti, heng],  /* 印，左边 */
	p_fanquanpang	: [pie, wanshugou, pie],  /* 狼 */
	p_zhewen		: [pie, hengzhepie, na],  /* 条 */
	p_shichi		: [pie, henggou, shuzheti],  /* 饭 */
	p_qianzitou		: [pie, henggou],  /* 欠，上部 */
	p_tuoziyou      : [pie, heng, shuwanhenggou],  /* 托，右边 */
	p_nawan			: [pie, hengzhenagou, dian],  /* 执，右边 */
	p_zhuzizuo		: [pie, heng, shu],  /* 竹，左边 */
	p_zhuziyou		: [pie, heng, shugou],  /* 竹，右边 */
	p_xiangzikuang  : [pie, shu, hengzheshugou],  /* 向 */
	p_shuangrenpang	: [pie, pie, shu],  /* 很 */
	p_weizitou		: [pie, hengzhepie],  /* 危 */
	p_fanwenpang	: [pie, heng, pie, na],  /* 故 */
	p_sanpie		: [pie, pie, pie],  /* 形 */
	p_caizitou		: [pie, dian, dian, pie],  /* 采 */
	p_jinzipang		: [pie, liaheng, shuzheti],  /* 银 */
	p_niaowuheng    : [pie, hengzheshugou, dian, shuzhehengzheshugou],  /* 鸟，无横 */
	p_niuwuwei      : [pie, heng, shu, heng],  /* 告，上面 */
	p_luanzizuo		: [pie, shuzheti, pie, dian],  /* 卵，左边 */
	p_congzikuang	: [pie, shu, hengzheshu, heng],  /* 囱, 外框 */
	p_xichudian		: [pie, hengzhepie, dian],  /* 囱, 里面 */
	p_zimei         : [pie, shuzhehengzheshugou, shu],  /* 姊，右边 */
	p_pizipang		: [pie, henggou, shu],  /* 皮，围部 */
	p_angzizuo      : [pie, shuzheti],  /* 卬，左边 */
	p_zhizizuo      : [pie, liaheng, shu, hengzheshugou, shu],  /* 制，左边 */
	p_suozizuo		: [pie, pie, hengzheshu, heng],  /* 所，左边 */
	p_yedian        : [pie, hengzhepie, dian, na],  /* 夜，下右 */
	p_beizitou      : [pie, shu, hengzheshu, liaheng, pie],  /* 卑，上部 */
	p_yanzili       : [pie, shu, heng, shuzheheng],  /* 延，里面 */
	p_maozizuo      : [pie, shuzheti, pie],  /* 卯，左边 */
	p_zhaozizuo		: [pie, dian, ti],  /* 兆，左边 */
	p_liuzidi       : [pie, shu, shuwanhenggou],  /* 流，右下 */
	p_zhutouban     : [pie, heng, dian],  /* 临，右上 */
	p_zhuzitou		: [pie, heng, dian, pie, heng, dian],  /* 竿，上部，竹字头 */
	p_xiezizuo      : [pie, liaheng, shu, heng, shu, ti],  /* 卸，左边 */
	p_gangwa        : [pie, liaheng, shu, shuzheheng, shu],  /* 缸，左边 */
	p_baizizuo      : [pie, liaheng, pie],  /* 拜，左边 */
	p_duanzizuo     : [pie, shu, liaheng, ti],  /* 段，左边 */
	p_zhuizili      : [pie, shu, hengzheshu, heng, hengzheshu, heng],  /* 追，里边 */
	p_yizidi        : [pie, shuzheti, pie, na],  /* 衣，下部 */
	p_paiyouli      : [pie, shuzheti, pie, na],  /* 派，右里 */
	p_yinshzizuo	: [pie, pie, hengzheshu, liaheng, hengzheshugou],  /* 殷，左边 */
	p_zhouzikuang	: [pie, hengzheshugou],  /* 周，外框 */
	p_fanzitou		: [pie, dian, pie, heng, shu, pie, na],  /* 番 */
	p_piedian		: [pie, dian],  /* 率，中最右 */
	p_piena			: [pie, na],  /* 水，右边 */
	p_chizidi		: [pie, shugou, pie, dian],  /* 赤, 下部 */
	p_xidian        : [pie, hengzhepie, dian, dian],  /* 然，上左 */
	p_souzitou		: [pie, shu, hengzheshu, liaheng, heng, shu],  /* 叟，上部 */
	p_dengshangyou	: [pie, pie, na],  /* 登, 上右 */
	p_aozikuang		: [pie, shu, hengzheshu],  /* 奥，上框 */
	p_maoshangzuo   : [pie, shuzheti, dian],  /* 贸，上左 */
	p_juzidi        : [pie, shu, pie, pie, pie, dian],  /* 聚，下部 */
	p_xun           : [pie, heng, shu, hengzheshu, dian, pie, heng, shu, liaheng],  /* 熏，上部 */
	p_yushangzuo    : [pie, shu, liaheng],  /* 舆，上左 */
	p_lishangyou	: [pie, hengzheshugou, pie],  /* 黎，上右 */
	p_yuxu			: [pie, shu, hengzheshu, liaheng, heng, pie, na],  /* 臾 */
	p_pieyong		: [pie, shu, hengzheshugou, liaheng, shu],  /* 鞴, 右下 */
	p_piechong		: [pie, s_chong],  /* 颹, 风里 */
	p_paiwupie		: [pie, shuzheti, na],  /* 隮, 右中右 */
	p_daoer			: [pie, liaheng, shu],  /* 隮, 右下 */
	p_chasidian		: [pie, dian, dian, dian, dian, dian],  /* 鬯，上里 */
	p_niaofanti		: [pie, hengzheshu, liaheng, shuzhehengzheshugou, dian, dian, dian, dian],  /* 鵏，右边 */


	p_yuer			: [p_weizitou, s_tian, heng], /* 鱼,儿 */
	p_xianqian		: [p_niuwuwei, p_er], /* 先,前 */
	p_zanmei		: [p_xianqian, p_xianqian, s_bei], /* 赞，美 */
	p_shubei		: [p_jiu, z_shutidd, z_shutidd, nagou], /* 鼠，辈 */
	p_qianque		: [p_qianzitou, p_ren], /* 欠，缺 */
	p_beiwei		: [p_beizitou, h_ten], /* 卑，微 */
	p_juewei		: [p_caizitou, s_siwuzhe, z_jizizuo, h_cun], /* 爵，位 */
	p_jinqian		: [p_ren, h_jinxia], /* 金，钱 */
	p_shiwu			: [p_ren, h_liang], /* 食，物 */
	p_fenxiang		: [p_ren, z_dao], /* 分,享 */
	p_pimao			: [p_pizipang, z_you],  /* 紃, 左边 */
	p_jintian		: [p_ren, d_jinzidi],  /* 今，天 */
	p_lingyan		: [p_ren, d_lingzidi],  /* 令,颜 */
	p_qiqiu			: [p_pieheng, z_yi],  /* 乞，求 */
	p_heyue			: [p_ren, heng, s_kou],  /* 合，约 */
	p_dongtian		: [p_zhewen, d_ldsl],  /* 冬，天 */
	p_daijia		: [p_danrenpang, h_shizikuang],  /* 代，价 */
	p_shetou		: [p_thousand, s_kou],  /* 舌，头 */
	p_quanbu		: [p_ren, h_wang],  /* 全，部 */
	p_houlai		: [p_fanzipang, heng, s_kou],  /* 后，来 */
	p_erya			: [p_qianzitou, p_ren],  /* 尔，雅 */
	p_jieshao		: [p_ren, p_dao],  /* 介,绍 */
	p_jufa			: [p_baozitou, s_kou],  /* 句，法 */
	p_baozheng		: [p_baozitou, z_si],  /* 包，拯 */
	p_gezhong		: [p_zhewen, s_kou],  /* 各，种 */
	p_duoshao		: [p_xi, p_xi],  /* 多, 少 */
	p_yunsu			: [p_baozitou, d_liangdianshui],  /* 匀，速 */
	p_weixian		: [p_weizitou, h_chang, z_cangzidi],  /* 危，险 */
	p_jiaoluo		: [p_weizitou, p_yong],  /* 角,落 */
	p_jianpiao		: [p_ren, heng, d_yingzidi],  /* 检，右边 */
	p_huali			: [p_danrenpang, p_bi, h_ten],  /* 华，丽 */
	p_zhaotou		: [p_zhaozizuo, z_zhaoziyou],  /* 兆，头 */
	p_mianchu		: [p_weizitou, s_tuzishen],  /* 免,除 */
	p_fenbie		: [p_ren, z_dao],  /* 分，别 */
	p_gushen		: [p_eightdian, p_ren, s_kou],  /* 谷,神 */
	p_gongdao		: [p_eight, z_sigong],  /* 公，道 */
	p_yuxia			: [p_ren, h_yuzidi],  /* 余，下 */
	p_yupingbai		: [p_ren, heng, p_yue, s_lidaopang],  /* 俞,平伯 */
	p_xiwang		: [p_chadian, h_buliao],  /* 希，望 */
	p_zhengqu		: [p_weizitou, z_zhengzidi],  /* 争，取 */
	p_secai			: [p_weizitou, z_ba],  /* 色，彩 */
	p_zhouquan		: [p_zhouzikuang, h_tu, s_kou],  /* 周，全 */
	p_congqian		: [p_ren, p_ren],  /* 从，前 */
	p_yufanti		: [p_weizitou, s_tian, d_sidiandi],  /* 魪,左边 */
	p_jimang		: [p_weizitou, z_xunzitou, d_xin],  /* 急，忙 */
	p_meiyou		: [p_ji, z_you],  /* 没，右边 */
	p_yuanmei		: [p_caizitou, heng, h_hengpie, z_you],  /* 爰, 美 */
	p_huiyi			: [p_ren, h_yuncai],  /* 会，议 */
	p_jisi			: [p_xidian, z_jishangyou, h_shizhong],  /* 祭，祀 */
	p_changong		: [p_weizitou, h_chang, p_eightdian, d_yanyu],  /* 蟾,右边，宫 */
	p_xiangwei		: [p_he, s_ri],  /* 香，味 */
	p_xiluo			: [p_caizitou, z_yao, h_da],  /* 奚，落 */
	p_feng			: [p_fengzitou, p_chadian],  /* 风 */



	/* 捺起 */
	d_six			: [dian, heng, pie, dian],  /* 六 */
	d_guang         : [dian, heng, pie],  /* 广 */
	d_wang          : [dian, heng, shuzheheng],  /* 亡 */
	d_men           : [dian, shu, hengzheshugou],  /* 门 */
	d_yi            : [dian, pie, na],  /* 义 */
	d_zhi           : [dian, hengzhepie, na],  /* 之 */
	d_wen           : [dian, heng, pie, na],  /* 文 */
	d_fang          : [dian, heng, hengzheshugou, pie],  /* 方 */
	d_huo			: [dian, pie, pie, na],  /* 火 */
	d_wei           : [dian, pie, hengzheshugou, dian],  /* 为 */
	d_dou           : [dian, dian, heng, shu],  /* 斗 */
	d_hu            : [dian, hengzheshu, heng, pie],  /* 户 */
	d_xin           : [dian, shuwanhenggou, dian, dian],  /* 心 */
	d_zhu           : [dian, liaheng, shu, heng],  /* 主 */
	d_shi           : [dian, heng, shu, hengzheshugou, shu],  /* 市 */
	d_li            : [dian, heng, dian, pie, heng],  /* 立 */
	d_ban           : [dian, pie, liaheng, shu],  /* 半 */
	d_tou           : [dian, dian, heng, pie, dian],  /* 头 */
	d_bi			: [dian, shuwanhenggou, dian, dian, pie],  /* 必 */
	d_yong          : [dian, hengzheshugou, hengzhepie, pie, na],  /* 永 */
	d_yiye          : [dian, heng, pie, shugou, pie, dian],  /* 亦 */
	d_jiao          : [dian, heng, pie, dian, pie, na],  /* 交 */
	d_yifu          : [dian, heng, pie, shuzheti, pie, na],  /* 衣 */
	d_chan          : [dian, heng, dian, pie, heng, pie],  /* 产 */
	d_mi            : [dian, pie, heng, shu, pie, na],  /* 米 */
	d_zhou          : [dian, pie, dian, shu, dian, shu],  /* 州 */
	d_nong          : [dian, henggou, pie, shuzheti, pie, na],  /* 农 */
	d_hai           : [dian, heng, piezheheng, pie, pie, dian],  /* 亥 */
	d_liang         : [dian, hengzheshu, liaheng, shuzheti, pie, na],  /* 良 */
	d_yatou			: [dian, pie, shu],  /* 丫，头 */
	d_bian			: [dian, heng, shu, dian],  /* 卞 */

	d_ldsl			: [dian, dian],  /* 冬 */
	d_xingzitou     : [dian, dian, pie],  /* 兴，上面，不带横 */
	d_jinzidi		: [dian, hengzhepie],  /* 今，下边 */
	d_liangdianshui	: [dian, ti],  /* 次 */
	d_shuxinpang	: [dian, dian, shu],  /* 怀 */
	d_yanzipang		: [dian, hengzheshuzheti],  /* 语 */
	d_tubaogai		: [dian, henggou],  /* 军 */
	d_lingzidi      : [dian ,hengzhepie, dian],  /* 令 */
	d_lanzitou		: [dian, pie],  /* 兰 */
	d_sandianshui	: [dian, dian, ti],  /* 江 */
	d_baogaitou		: [dian, dian, henggou],  /* 安 */
	d_shizipang		: [dian, hengzhepie, shu, dian],  /* 视 */
	d_zouzhidi		: [dian, hengzheshuzhehengzhepie, na],  /* 过 */
	d_sanzidi		: [dian, pie, heng, shu],  /* 伞，下部 */
	d_jiangzipang	: [dian, ti, shu],  /* 壮 */
	d_liuzitou		: [dian, heng],  /* 六 */
	d_bingzitou		: [dian, heng, pie, dian, ti],  /* 病 */
	d_yingzidi		: [dian, dian, pie, heng],  /* 应，下部 */
	d_chongzitou    : [dian, heng, piezheheng, dian],  /* 充，上面 */
	d_panzizuo      : [dian, pie, liaheng, pie],  /* 判，左边 */
	d_shenziyou     : [dian, henggou, pie, shuwanhenggou],  /* 沈，右边 */
	d_xuezitou		: [dian, dian, henggou, pie, dian],  /* 究，上边 */
	d_hanzitou		: [dian, henggou, pie, dian],  /* 罕，上边 */
	d_buyipang		: [dian, hengzhepie, shu, pie, dian],  /* 补 */
	d_sidiandi		: [dian, dian, dian, dian],  /* 点 */
	d_bianzitou     : [dian, heng, shu, shu, pie, dian],  /* 变，上部 */
	d_haizitou		: [dian, heng, piezheheng, pie],  /* 亥，上部 */
	d_juanzitou     : [dian, pie, liaheng, pie, na],  /* 卷，上面 */
	d_langzizuo		: [dian, hengzheshu, liaheng, shuzheti, dian],  /* 郎，左边 */
	d_xinzidi       : [dian, pie, liaheng, shu],  /* 辛，去点横 */
	d_shangzitou	: [dian, heng, dian, pie],  /* 商，上部 */
	d_qianzitou		: [dian, pie, heng],  /* 前，上部 */
	d_ni            : [dian, pie, heng, shuzheheng, shu, pie],  /* 逆，里面 */
	d_dianpie       : [dian, pie],  /* 班，里面 */
	d_yizitou       : [dian, pie, heng, pie, dian],  /* 益，上部 */
	d_gezili        : [dian, pie, heng, shu],  /* 隔，右下里 */
	d_bizizuo       : [dian, pie, shu, hengzheshugou, shu, pie, dian],  /* 敝，左边 */
	d_hezizuo		: [dian, henggou, pie, shu, dian, liaheng, shu, liaheng],  /* 鹤，左边 */
	d_jizitou		: [dian, ti, pie, dian, pie, na],  /* 脊，上部 */
	d_sandiandi		: [dian, dian, dian],  /* 脊，上部 */
	d_huowupie		: [dian, pie, na],  /* 㶲, 左边 */



	d_yanyu			: [d_liuzitou, h_two, s_kou],  /* 言，语 */
	d_luer			: [d_guang, z_luzhongsh, h_bizizuo, p_bi],  /* 鹿 */
	d_xinku			: [d_li, h_ten],  /* 辛，苦 */
	d_jingdu		: [d_liuzitou, s_kou, z_xiao],  /* 京，都 */
	d_qiuzhang		: [d_liuzitou, h_youxin],  /* 酋，长 */
	d_zunzhong		: [d_qiuzhang, h_cun],  /* 尊，重 */
	d_xiangyang		: [d_liuzitou, s_kou, s_kou, h_sanhls, p_yizidi],  /* 襄，阳 */
	d_yanger		: [d_liuzitou, h_yangzishen],  /* 羊 */
	d_mofang		: [d_guang, h_mu, h_mu, h_stone],  /* 磨，坊 */
	d_cixu			: [d_liangdianshui, p_qianque],  /* 次，序 */
	d_yongzheng		: [d_liuzitou, z_xiang, p_quezipang],  /* 雍，正 */
	d_aile			: [d_liuzitou, s_kou, p_yizidi],  /* 哀，乐 */
	d_anquan		: [d_baogaitou, z_nv],  /* 安，全 */
	d_linlin		: [d_mi, p_xi, h_jiangyouxia],  /* 粼，左边 */
	d_yichu			: [d_yizitou, s_minzidi],  /* 益,处 */
	d_zhangwen		: [d_li, s_ri, h_ten],  /* 章，文 */
	d_xuanmiao		: [d_liuzitou, z_yao],  /* 玄, 妙 */
	d_naoziyou		: [d_liuzitou, p_chadian, z_xiongzikuang],  /* 脑，右边 */
	d_chongman		: [d_chongzitou, p_er],  /* 充，满 */
	d_bingqie		: [d_lanzitou, h_kai],  /* 并，且 */
	d_kangfen		: [d_liuzitou, p_ji],  /* 亢，奋 */
	d_duixian		: [d_lanzitou, s_kou, p_er],  /* 兑，现 */
	d_dandu			: [d_lanzitou, s_danzidi],  /* 单，独 */
	d_xiangshou		: [d_liuzitou, s_kou, z_zi],  /* 享，受 */
	d_zuzi			: [d_liuzitou, p_ren, p_ren, h_ten],  /* 卒，子 */
	d_dixiong		: [d_lanzitou, z_dizidi],  /* 弟，兄 */
	d_gaoshou		: [d_liuzitou, s_kou, s_tongzikuang, s_kou],  /* 高，手 */
	d_tangchao		: [d_guang, z_tangzili, s_kou],  /* 唐，朝 */
	d_didu			: [d_shangzitou, d_tubaogai, s_jin],  /* 帝，都 */
	d_yanre			: [d_huo, d_huo],  /* 炎，热 */
	d_tingtai		: [d_liuzitou, s_kou, d_tubaogai, h_ding],  /* 亭，台 */
	d_meili			: [d_lanzitou, h_wang, h_da],  /* 美，丽 */
	d_xuexiao		: [d_xingzitou, d_tubaogai, z_zi],  /* 学，校 */
	d_libie			: [d_naoziyou, s_tongzikuang, z_sigong],  /* 离，别 */
	d_pangbian		: [d_shangzitou, d_tubaogai, d_fang],  /* 旁，边 */
	d_qinren		: [d_li, h_mugou],  /* 亲，人 */
	d_fuling		: [d_li, s_kou],  /* 涪，右边，陵 */
	d_bingbao		: [d_liuzitou, s_kou, s_kou, h_shizhong],  /* 禀，报 */
	d_yisi			: [d_li, s_ri, d_xin],  /* 意，思 */
	d_tanxiang		: [d_liuzitou, s_kou, s_kou, s_danxi],  /* 檀，右边，香 */
	d_mamu			: [d_guang, h_mu, h_mu],  /* 麻，木 */




	/* 折起 */
	z_yi            : [hengzheshuwanhenggou],  /* 乙 */
	z_le            : [hengzhepie, shugou],  /* 了 */
	z_li            : [hengzheshugou, pie],  /* 力 */
	z_nai           : [hengzheshuzhehengzheshugou, pie],  /* 乃 */
	z_dao           : [hengzheshugou, pie],  /* 刀 */
	z_you           : [hengzhepie, na],  /* 又 */
	z_xiao			: [shugou, pie, dian],  /* 小 */
	z_shi			: [hengzheshu, heng, pie],  /* 尸 */
	z_gong          : [hengzheshu, heng, shuzhehengzheshugou],  /* 弓 */
	z_ji            : [hengzheshu, heng, shuwanhenggou],  /* 己 */
	z_yijing        : [hengzheshu, heng, shuwanhenggou],  /* 已 */
	z_si            : [hengzheshu, heng, shuwanhenggou],  /* 巳 */
	z_zi            : [hengzhepie, shugou, heng],  /* 子 */
	z_wei			: [hengzheshugou, shu, heng],  /* 卫 */
	z_ye            : [hengzheshugou, shu, shuwanhenggou],  /* 也 */
	z_nv            : [piezhedian, pie, heng],  /* 女 */
	z_fei			: [hengzhenagou, pie, dian],  /* 飞 */
	z_ren			: [hengzheshugou, pie, dian],  /* 刃 */
	z_xi            : [hengzheshugou, dian, ti],  /* 习 */
	z_cha			: [hengzhepie, na, dian],  /* 叉 */
	z_ma            : [hengzheshu, shuzhehengzheshugou, heng],  /* 马 */
	z_xiang			: [piezheheng, piezheheng, pie],  /* 乡 */
	z_diao			: [hengzheshugou, ti],  /* 刁 */
	z_shui          : [shugou, hengzhepie, pie, na],  /* 水 */
	z_chi           : [hengzheshu, heng, pie, na],  /* 尺 */
	z_chou          : [hengzheshu, heng, shu, heng],  /* 丑 */
	z_ba            : [hengzheshu, shu, heng, shuwanhenggou],  /* 巴 */
	z_ban           : [hengzheshugou, pie, dian, dian],  /* 办 */
	z_yu            : [hengzhepie, dian, henggou, shugou],  /* 予 */
	z_shuben		: [hengzheshu, hengzheshugou, shu, dian],  /* 书，本 */
	z_min           : [hengzheshu, heng, shuzheti, heng, nagou],  /* 民 */
	z_chu           : [shuzheheng, shu, shu, shuzheheng, shu],  /* 出 */
	z_mao           : [hengzhepie, dian, henggou, shugou, pie],  /* 矛 */
	z_mu            : [piezheheng, hengzheshugou, heng, dian, dian],  /* 母 */
	z_yin           : [hengzheshu, liaheng, pie],  /* 尹 */
	z_fu            : [hengzheshu, heng, shuzhehengzheshugou, pie, shu],  /* 弗 */
	z_yuming        : [hengzheshu, liaheng, liaheng, shu],  /* 聿 */
	z_su			: [hengzheshu, liaheng, shu, pie, shu, pie, dian],  /* 肃 */
	z_lishu         : [hengzheshu, liaheng, shugou, dian, ti, pie, na],  /* 隶，属 */
	z_chengdan		: [hengzhepie, shugou, liaheng, heng, hengzhepie, pie, na],  /* 承 */
	z_nie			: [hengzheshugou, shuwanhenggou],  /* 乜 */
	z_jiejue		: [hengzhepie, shugou, ti],  /* 孑孓 */
	z_juejie		: [hengzhepie, shugou, na],  /* 孓孑 */
	z_yao			: [piezheheng, piezheheng, dian],  /* 幺 */
	z_guai			: [hengzheshu, heng, pie, na],  /* 夬 */
	z_pan			: [shuzheheng, shu, heng, pie],  /* 爿 */
	z_wu			: [shuzheheng, hengzheshugou, heng, pie],  /* 毋 */
	z_gen			: [hengzheshu, liaheng, shuzheti, pie, na],  /* 艮 */
	z_guan			: [shuzheheng, hengzheshu, heng, shu],  /* 毌 */

	z_cangzidi		: [hengzheshugou, shuwanhenggou],  /* 仓，下部 */
	z_xiongzikuang	: [shuzheheng, shu],  /* 画, 下框 */
	z_sigong		: [piezheheng, dian],  /* 私 */
	z_zuoerpang		: [hengzhepiezhewanshugou, shu],  /* 阳 */
	z_youerpang		: [hengzhepiezhewanshugou, shu],  /* 那 */
	z_danerpang		: [hengzheshugou, shu],  /* 印 */
	z_shutidian		: [shuzheti, dian],  /* 以，左边 */
	z_xunzitou		: [hengzheshu, liaheng],  /* 寻 */
	z_shouzizuo     : [shuzheti, shu],  /* 收，左边 */
	z_xunziyou      : [hengzhenagou, heng, shu],  /* 讯，右边 */
	z_jiaosipang	: [piezheheng, piezheheng, ti],  /* 红 */
	z_siziban       : [piezheheng, piezheheng],  /* 丝，上一半 */
	z_jianzidi		: [hengzheshuzhehengzhepie, na],  /* 建 */
	z_sanzhe		: [piezhedian, piezhedian, piezhedian],  /* 巡 */
	z_luanziyou		: [hengzheshugou, shu, dian],  /* 卵，右边 */
	z_jizizuo       : [hengzheshu, liaheng, shuzheti, dian],  /* 即，左边 */
	z_yangziyou     : [hengzheshuzhehengzheshugou, pie, pie],  /* 杨，右边 */
	z_nazizuo       : [hengzheshugou, liaheng, pie],  /* 那，左边 */
	z_meizitou      : [hengzheshu, shu, heng, pie],  /* 眉，上部 */
	z_jingzitou		: [hengzhepie, dian],  /* 经，右上部 */
	z_fazipang		: [shuzheheng, pie, dian],  /* 发, 围部 */
	z_zhengzidi		: [hengzheshu, liaheng, shugou],  /* 争, 下部 */
	z_luzitou		: [hengzheshu, liaheng],  /* 录 */
	z_dianshui      : [shugou, dian, ti, pie, dian],  /* 泰，下面 */
	z_hanzili		: [hengzhepie, shugou, dian, ti, pie, dian],  /* 函，里面 */
	z_zhaoziyou		: [shuwanhenggou, pie, dian],  /* 兆，右边 */
	z_dizidi        : [hengzheshu, heng, shuzhehengzheshugou, shu, pie],  /* 第，下面 */
	z_yongzitou     : [hengzhepie, dian],  /* 甬，上面 */
	z_houzitou      : [hengzheshu, heng],  /* 侯，右上 */
	z_xiaodian		: [shugou, pie, dian, dian],  /* 恭 */
	z_eti           : [hengzheshugou, shuzheti],  /* 顾，左里 */
	z_tangzili      : [hengzheshu, liaheng, shu],  /* 唐，里上 */
	z_jiazizuo		: [hengzheshu, heng, shu, liaheng],  /* 叚, 左边 */
	z_zuokai        : [hengzheshu, heng],  /* 叚，右上 */
	z_yongzili      : [hengzheshu, liaheng, shu, hengzheshugou, liaheng, shu],  /* 庸，里面 */
	z_luzhongsh     : [hengzheshu, heng, shu, shu],  /* 鹿，中上 */
	z_sangzidi      : [shuzheti, pie, na],  /* 丧，下边 */
	z_xuanyouxia	: [henggou, shu, heng, pie, na],  /* 旋，右下 */
	z_liangshangyou	: [hengzheshugou, pie, dian, dian],  /* 梁，右上 */
	z_ganzizuo		: [hengzheshu, heng, shu, shu, liaheng, heng],  /* 敢，左边 */
	z_jishangyou    : [hengzhepie, na],  /* 祭，上右 */
	z_dengshangzuo	: [hengzhepie, dian],  /* 登，上左 */
	z_fangzidi      : [hengzheshugou, pie],  /* 方，下部 */
	z_shuzizuo      : [hengzhepie, shu, heng, shu, ti],  /* 疏，左边 */
	z_yuanzitou     : [piezheheng, hengzhepie],  /* 缘，右上 */
	z_zhizitou		: [piezheheng, hengzhepie, heng],  /* 彘，上面 */
	z_shutidd       : [shuzheti, dian, dian],  /* 鼠，下最左 */
	z_dingxiazuo    : [shuzhehengzheshu, heng, pie],  /* 鼎，下左 */
	z_chiyoush      : [shuzheheng, shu, shu, heng],  /* 嗤，右上 */
	z_yushangyou    : [hengzheshu, liaheng],  /* 舆，上右 */
	z_gengzili		: [hengzheshu, liaheng, pie, na],  /* 庚，里面 */
	z_chengzishang	: [hengzhepie, shugou, hengzhepie, pie, na],  /* 丞，上部 */
	z_juzikuang		: [hengzheshu, heng, pie, hengzheshugou],  /* 局，去口，外框 */
	z_liangzhe		: [piezhedian, piezhedian],  /* 粼, 右部 */
	z_weiyoushang	: [hengzheshu, shu, heng],  /* 媁,右上 */
	z_taoyoushang	: [shuzheheng, shu, shu],  /* 弢,右上 */


	z_bi			: [z_shi, s_kou, d_li, h_ten],  /* 辟 */
	z_canjia		: [z_sigong, h_da, p_sanpie],  /* 参，加 */
	z_yuanfen		: [z_yuanzitou, h_zhizhu],  /* 缘，右边 */
	z_lieshu		: [z_sanzhe, s_kou, p_chadian, z_shutidd, z_shutidd, nagou],  /* 躐,右边 */
	z_sifanti		: [z_yao, d_sandiandi],  /* 紃, 左边 */
	z_weifanti		: [z_weiyoushang, s_kou, h_jiangyouxia],  /* 媁,右边 */
	z_siyi			: [hengzheshugou, heng, s_kou],  /* 司，仪 */
	z_taifeng		: [z_sigong, s_kou],  /* 司，仪 */
	z_zhaoji		: [z_dao, s_kou],  /* 召, 集 */
	z_yongdao		: [z_yongzitou, p_yong],  /* 甬,道 */
	z_junxiu		: [z_sigong, p_eightdian, p_zhewen],  /* 俊，右边 */
	z_yumao			: [z_xi, z_xi],  /* 羽，毛 */
	z_luqu			: [z_luzitou, z_dianshui],  /* 录，取 */
	z_qinlue		: [z_xunzitou, d_tubaogai, z_you],  /* 侵，右边 */
	z_dengzitou		: [z_dengshangzuo, p_dengshangyou],  /* 登，上部 */
	z_yaoxiao		: [z_yao, z_xiao],  /* 索，取 */
	z_houyou		: [z_houzitou, p_shi],  /* 侯，右边 */


};


