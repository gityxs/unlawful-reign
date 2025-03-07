/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "City": "城市",
    "Day": "天数",
    "Just an everyday man": "只是一个平凡的人",
    "Money": "现金",
    "Pickpocket": "扒窃",
    "Player": "玩家",
    "Stranger": "陌生人",
    "Talk": "交谈",
    "Able to bribe cops if Criminal status is 1": "如果犯罪状况为 1，则能够贿赂警察",
    "Available Upgrades": "可用升级",
    "Avoid Eye Contact": "避免眼神接触",
    "Oink Oink": "哼哼",
    "Police": "警察",
    "Purchased Upgrades": "购买的升级",
    "Unlocks Shoplift": "解锁商店盗窃",
    "Upgrades": "升级",
    "A store full of freebies (I think?)": "一家充满免费赠品的商店（我想？）",
    "Encounter Chances": "遇见几率",
    "Pass Through": "穿过",
    "Police:": "警察：",
    "Shop": "商店",
    "Shop:": "商店：",
    "Stranger:": "陌生人：",
    "Busted!": "被捕！",
    "Double Pickpocket reward": "扒窃奖励翻倍",
    "Thicker Wallets": "钱包加厚",
    "+10% chance to get Stolen Goods when Shoplifting": "入店行窃时获得被盗物品的几率 +10%",
    "Double Shoplifting Reward": "双倍入店行窃奖励",
    "Fancier Stores": "精品店",
    "Shoplift": "入店行窃",
    "Small Business Theft": "小型企业盗窃",
    "Year": "年份",
    "Superstores": "超市",
    "Doubles Shoplifting Reward": "双倍入店行窃奖励",
    "Be able to recruit Shady Strangers and start your Gang": "能够招募可疑的陌生人并组建你的帮派",
    "Black Market Invitation": "黑市邀请",
    "Double notoriety when talking with shady strangers if you're not a criminal": "如果你不是罪犯，与可疑的陌生人交谈时会受到双重恶名",
    "No One's Listening": "无人聆听",
    "Squad Up": "组队",
    "Unlock the Black Market": "解锁黑市",
    "Shady Talk": "阴暗谈话",
    "Notoriety": "恶名",
    "Just an everyday criminal": "只是一个普通的罪犯",
    "Shady Stranger": "阴暗的陌生人",
    "Fancier Folk": "爱好者",
    "Chance to steal jewels when pickpocketing": "扒窃时有几率偷走珠宝",
    "Purse Snatcher": "钱包抢夺者",
    "Triple pickpocket reward": "三倍扒窃奖励",
    "Scare Tactics": "恐吓战术",
    "Small Safe": "小型保险箱",
    "Increases Stolen Goods capacity": "增加被盗物品容量",
    "Distracted Store Clerks": "分心的店员",
    "Be able to Mug Strangers": "能够抢劫陌生人",
    "Criminal": "犯罪",
    "Shady Stranger:": "阴暗的陌生人：",
    "You've recently commited a crime and the police have your arrest warrant": "您最近犯了罪，警方收到了您的逮捕令",
    "Black Market": "黑市",
    "PAY TO ACCESS DEEPER": "付费才能更深入地访问",
    "Underworld Store": "地下世界商店",
    "Expensive Produce": "昂贵的产物",
    "~~~ FIND ITEMS TO SELL ~~~": "~~~ 寻找可出售的物品 ~~~",
    "+10% chance to shoplift items": "+10% 几率偷窃物品",
    "+10% Recruit Shady Stranger chance": "+10% 招募阴暗陌生人的几率",
    "+15% Sale Prices": "+15% 销售价格",
    "+2 Notoriety when talking with shady strangers": "与可疑的陌生人交谈时+2 恶名",
    "+5% chance to shoplift items": "+5% 几率偷窃物品",
    "A professional look makes half the sale": "专业的外观让销售成功一半",
    "Bandana": "头巾",
    "Bit more hesitant to yank money away from a fellow cop": "更犹豫是否要从警察同事那里抢钱",
    "Body": "身体",
    "Cryptic Armory": "神秘军械库",
    "Easier to hide things in": "更容易隐藏东西",
    "Fake Body Tattoos": "假身体纹身",
    "Fancy Tie": "花式领带",
    "Feet": "脚部",
    "Head": "头部",
    "I'm not superstitious but I swear these pair of boots are magic": "我不迷信，但我发誓这双靴子有魔力",
    "I'm not sure what to get for my real tattoos yet": "我还不知道要为我的真正纹身买什么",
    "Lose 10% less total money when Busted": "失败时总损失减少 10%",
    "Lucky Hunting Boots": "幸运狩猎靴",
    "Representing your colors": "代表你的颜色",
    "Sheriff Badge": "警长徽章",
    "Trench Coat": "风衣",
    "Upgraded Blackmarket and unlocked the 'Equipment Shop'": "升级黑市并解锁“装备店”",
    "Stolen Goods": "被盗物品",
    "Equipment": "装备",
    "Be able to Graffiti the outside of stores": "能够在商店外面涂鸦",
    "Creative Mind": "创意思维",
    "Gain more Notoriety from Shady Talk per Gang Member": "每个帮派成员从黑幕谈话中获得更多恶名",
    "Word on the Street": "街头传言",
    "You talk about how great your gang is but they don't care": "你谈论你的帮派有多棒，但他们不在乎",
    "Gang": "帮派",
    "Gang Members": "帮派成员",
    "Recruit Member": "招募成员",
    "Upgrade Gang": "升级帮派",
    "Be able to sacrifice Strangers": "能够牺牲陌生人",
    "Deeper Alleys": "更深的小巷",
    "Double Mugging Reward": "双倍抢劫奖励",
    "Naive Tourists": "天真的游客",
    "Sinister Intent": "险恶的意图",
    "Mugging": "抢劫",
    "Knife": "刀",
    "Hands": "手部",
    "I was never actually going to use it on someone... probably": "我从来没有真正打算在某人身上使用它......可能",
    "High Resale Value": "高转售价值",
    "2 For 1 Sale": "2 换 1 销售",
    "Whistle Lure": "口哨诱饵",
    "Shoplift has no criminal penalty": "入店行窃不会受到刑事处罚",
    "Master Lifter": "举重大师",
    "Magnetic Bracelet": "磁性手链",
    "+10% Chance to pickpocket Stolen Jewels": "+10% 几率扒窃被盗珠宝",
    "Pocket Gems": "口袋宝石",
    "Triples pickpocket reward": "三倍扒窃奖励",
    "Very Loose Change": "非常宽松的零钱",
    "+5% Pickpocket Jewels chance": "+5% 扒窃珠宝几率",
    "Memorized Guard Shift": "记忆守卫班次",
    "Jewelry Box": "首饰盒",
    "+5 Max Stolen Jewels": "+5 被盗珠宝上限",
    "+2 Jewelry Heist planning progress speed": "+2 珠宝盗窃案策划进展速度",
    "Spectacles": "眼镜",
    "Silent but deadly": "沉默却致命",
    "Ninja Tabi": "忍者之旅",
    "Jewelry Heists are rerolled if unsuccessful": "如果珠宝抢劫不成功，则会重新进行",
    "Can finally find where the exit signs are located": "终于可以找到出口标志的位置了",
    "+2 Jewelry Heist Planning Progress": "+2 珠宝抢劫计划进度",
    "'Yeah, b*tch! Magnets!' - J. Pinkman": "'是啊，混蛋！ 磁铁！ - J·Pinkman",
    "+1 base Souls from sacrifices": "+1 基础灵魂通过牺牲",
    "Increases Souls capacity": "增加灵魂容量",
    "Soul Gem": "灵魂宝石",
    "Sacrifice": "牺牲",
    "Soul Infused Dagger": "灵魂匕首",
    "x1.50 ALL Money Rewards while active": "活跃时 x1.50 所有金钱奖励",
    "Upgrade Cult": "升级邪教",
    "Souls": "灵魂",
    "Sell": "出售",
    "Not Active": "未激活",
    "Lasts for 15 Days": "持续15天",
    "New Ritual": "新仪式",
    "Increases Souls gained from Sacrifices per Gang Member": "增加每个帮派成员的牺牲所获得的灵魂",
    "Increases Souls gained from Sacrifices": "增加通过牺牲获得的灵魂",
    "Consumes Money daily": "每天消耗金钱",
    "Consumes Notoriety daily": "每天消耗罪恶",
    "Cult": "邪教",
    "Cultist Training Grounds": "邪教徒训练场",
    "Demonic Rites": "恶魔仪式",
    "Jewelry Store": "珠宝店",
    "Jewelry Store:": "珠宝店：",
    "You may encounter the devil if your sin is at least 5": "如果你的罪数至少为5，你可能会遇到魔鬼",
    "Sinner": "罪人",
    "You've recently commited a sin, the devil draws closer": "你最近犯了罪，魔鬼正在逼近",
    "-1 Sinner penalty when Sacrificing": "牺牲时罪人惩罚 -1",
    "Flower Crown": "花冠",
    "Strange Dagger": "奇怪的匕首",
    "Sacrificing just feels a little more right when I'm wearing this crown": "当我戴上这顶王冠时，牺牲感觉更正确",
    "x1.5 Base Souls from Sacrifice": "x1.5 来自牺牲的基础灵魂",
    "You can feel a strange power eminates from its blade": "你能感觉到一股奇异的力量从它的刀刃上散发出来",
    "A thief's paradise": "小偷的天堂",
    "Plan Heist": "计划抢劫",
    "+1 Bribe Level": "+1 贿赂等级",
    "Doubles Notoriety from Shady Talk": "阴暗谈话使恶名加倍",
    "Increase Notoriety gain by 25% if criminal status is at least 5": "如果犯罪状况至少为 5，则恶名增益增加 25%",
    "Mildly Notorious": "轻微恶名昭彰",
    "Street Smarts": "街头智慧",
    "Morally Malleable": "道德可塑性",
    "Your heist goes awry and you get caught!": "你的抢劫出了岔子，你被抓住了！",
    "Bribe": "贿赂",
    "Disguise Toolkit": "伪装工具包",
    "x1.5 Shoplift Money reward": "x1.5 商店盗窃金钱奖励",
    "x2 Notoriety when not a criminal": "x2 非罪犯时的恶名",
    "Identity Theft": "身份盗窃",
    "Able to trade your Gang Members for your freedom": "能够用你的帮派成员换取你的自由",
    "Snitch": "告密者",
    "Talk with Strangers to build a Fake Identity, used to escape from the Police": "与陌生人交谈以建立一个假身份，用于逃避警察的追捕",
    "5 Finger Discount": "5 指折扣",
    "+15% chance of shoplifting item": "+15% 商店盗窃物品的几率",
    "Does not remove Criminal Status": "不会消除犯罪身份",
    "+2 Jewelry Store Plan Speed": "+2 珠宝店计划速度",
    "+2 Stolen Jewel from Jewelry Store Heists": "+2 珠宝店抢劫案中被盗的珠宝",
    "Constant Surveillance": "持续监控",
    "Fake Cameras": "假相机",
    "Unlocked Display Case": "解锁展示柜",
    "Stolen Jewels": "被盗的珠宝",
    "Better Paints": "更好的油漆",
    "Doubles Graffiti Reward": "双倍涂鸦奖励",
    "Store Robbery": "商店抢劫",
    "Unlock Gang Robbery": "解锁帮派抢劫",
    "Graffiti": "涂鸦",
    "Going-out-of-business Sale": "停业出售",
    "“How To Sell” for Dummies": "如何销售给傻瓜",
    "Doubles Stolen Goods sell price": "被盗物品售价翻倍",
    "Altar": "祭坛",
    "Buy": "购买",
    "CAST": "施放",
    "I was born with an artist's soul": "我生来就有艺术家的灵魂",
    "Spraycan": "喷雾罐",
    "x1.5 Notoriety from Graffiti": "x1.5 恶名来自涂鸦",
    "+50% Ritual Power": "+50% 仪式力量",
    "Able to rob Jewelry Stores with your gang": "能够与你的帮派一起抢劫珠宝店",
    "Armed Robberies": "武装抢劫",
    "Double Money gained from Gang Robbery": "团伙抢劫获得双倍金钱",
    "Double Notoriety gained from Gang Robbery": "帮派抢劫获得双倍恶名",
    "Filled Cash Registers": "收银机已满",
    "Unholy Aid": "邪恶的援助",
    "Wanted Posters": "通缉海报",
    "-1 Gang Members needed and +5 Notoriety from Robbery": "需要 -1 帮派成员和 +5 抢劫恶名",
    "Sagging Jeans": "松弛牛仔裤",
    "Legs": "腿部",
    "You need a minimum of 5 Gang Members": "您至少需要 5 名帮派成员",
    "'Ebonics' Music CD": "“Ebonics”音乐 CD",
    "Bejeweled Jeans": "宝石迷阵牛仔裤",
    "Too cool for belts": "腰带太酷了",
    "+5% chance to pickpocket Stolen Jewels": "+5% 几率扒窃被盗珠宝",
    "x2 Graffiti Notoriety Reward": "x2 涂鸦恶名奖励",
    "Reduce Graffiti Crime penalty and max penalty by 1": "将涂鸦犯罪惩罚和最高惩罚减少 1",
    "Better Artist": "更好的艺术家",
    "Artistic Flare": "艺术耀斑",
    "Buy some seeds and pick up gardening": "买一些种子并从事园艺工作",
    "Magical Beans": "魔豆",
    "EARN ENOUGH INFAMY TO UNLOCK": "获得足够的恶名才能解锁",
    "Sell Stolen Jewels for x1.5 more": "以 x1.5 的价格出售被盗的珠宝",
    "Shiny Splendor": "闪亮辉煌",
    "Backroom Safe": "密室保险箱",
    "x1.5 Money gained from Gang Robbery": "x1.5 帮派抢劫所得金钱",
    "Build Fake Identity": "建立虚假身份",
    "+0.15 Fake Identity": "+0.15 虚假身份",
    "You learn a little more about the stranger's life to build a fake profile... +0.15 Fake Identity": "您对陌生人的生活有了更多的了解，从而建立了一个虚假的个人资料... +0.15 虚假身份",
    "Use Fake Identity": "使用虚假身份",
    "Fake Identity": "虚假身份",
    "Does not remove Criminal status": "不会消除犯罪状态",
    "Fake Mustache": "假胡子",
    "Greenhouse": "温室",
    "Double Fake Identity build speed": "双倍虚假身份构建速度",
    "Double plant growth speed": "植物生长速度加倍",
    "Dry, slowing down growth by 60%": "干燥，生长速度减慢60%",
    "Expand Flower Bed": "扩张花坛",
    "Facial hair - Nature's disguise kit": "面部毛发 - 大自然的伪装套件",
    "Fertilizer": "肥料",
    "Greenhouse": "温室",
    "Laminator": "覆膜机",
    "Sickle": "收割",
    "Sow": "播种",
    "Water": "浇水",
    "Weeds": "草药",
    "x1.15 Build Fake Identity Speed": "x1.15 构建虚假身份速度",
    "You hand the police your fake ID card and safely leave before he realizes. -1.00 Fake Identity": "你把你的假身份证交给警察，然后在他意识到之前安全离开。 -1.00 虚假身份",
    "(Sickle)": "（收割）",
    "(Sow)": "(播种)",
    "(Water)": "(水)",
    "Empty": "空",
    "Watering Can": "喷壶",
    "Farmer Overalls": "农民工作服",
    "+10% Chance for bonus Drugs on harvest": "+10% 收获时获得奖励草药的几率",
    "Plants stay wet for twice as long": "植物保持湿润的时间延长两倍",
    "Getting down and dirty with Mother Earth": "与地球母亲一起堕落和肮脏",
    "Buy Gun": "购买玩具枪",
    "Cheaper Firepower": "更便宜的火力",
    "Gun prices rise more slowly": "玩具枪价格上涨速度放缓",
    "Guns": "玩具枪",
    "If you lose, lose all Notoriety and Gang Members": "如果你输了，就会失去所有恶名和帮派成员",
    "If you win, you may choose a Gang Upgrade": "如果你赢了，你可以选择帮派升级",
    "Start Gang War": "开始帮派战争",
    "The Iron Ravens": "钢铁乌鸦",
    "Your Gang": "你的帮派",
    "-All": "-全部",
    "Able to deal drugs to Shady Strangers for a xundefined Markup": "能够以未定义的标记向阴暗的陌生人交易草药",
    "Credible Bling": "可信的金光闪闪",
    "Local Dealer": "当地经销商",
    "+20% chance for +1 Stolen Jewels when committing Armed Robbery": "实施武装抢劫时，+20% 几率获得 +1 被盗珠宝",
    "+All": "+全部",
    "Carry a spare gun incase one wasn't intimidating enough": "携带一把备用玩具枪，以防万一不够吓人",
    "Holster": "玩具枪套",
    "+5% chance to recruit Shady Strangers": "+5% 几率招募可疑陌生人",
    "Easy Upsell": "轻松追加销售",
    "x1.5 Stolen Goods Sell Price": "x1.5 被盗物品售价",
    "+10% Chance for x2 Drugs on harvest": "+10% 收获时获得 x2 草药的几率",
    "+10% Shoplift Stolen Goods chance": "+10% 商店行窃被盗物品几率",
    "Selective Breeding": "选育",
    "Swiper, Yes Swiping": "刷卡器，是刷卡",
    "Temperature Control": "温度控制",
    "x1.2 Greenhouse growth speed": "x1.2 温室生长速度",
    "Plant": "种植",
    "Weeds, slowing down growth by 40%": "草药，生长速度减慢 40%",
    "RESTART": "重新开始",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "expand_more": "expand_more",
    "expand_less": "expand_less",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "(Max: ": "(最大: ",
    "Criminal: ": "犯罪: ",
    "You pickpocket +": "你偷到了 +",
    "Hotkey: ": "快捷键: ",
    "Busted! You lose -": "被捕! 你失去了 -",
    "Purchased Upgrade '": "已购买升级 '",
    "You shoplift +": "你入店行窃 +",
    "Shoplift (": "入店行窃 (",
    "Purchased Equipment '": "已购买装备 '",
    "Try Recruit (": "尝试招募（",
    "Members: ": "成员: ",
    "You persuade your fellow criminal to join in your misdoings. ": "你说服你的同伙加入你的犯罪行列。",
    "You mug +": "你抢到了 +",
    "Pickpocket (": "扒窃 (",
    "Sinner: ": "罪人：",
    "Heist (": "抢劫 (",
    "You continue making meticulous heist preperations...": "你继续精心准备抢劫……",
    "Rerolls: ": "重投：",
    "You slip some money into the cop's pockets and walk away...": "你把一些钱塞进警察的口袋然后走开......",
    "Too high Criminal Status (Max ": "犯罪程度过高（最大 ",
    "Store Robbery (": "商店抢劫（",
    "You upgraded your Gang to Level ": "您将帮派升级至等级 ",
    "You feel fully prepared to execute your heist ": "你觉得已经做好了执行抢劫的充分准备 ",
    "Growth: ": "生长: ",
    "Wetness: ": "湿度: ",
    "You carry out your heist and manage to get away! ": "你实施了抢劫并成功逃脱！",
    "Purchased Upgrades ": "已购买升级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "'!": "'!",
    "/Member/Day)": "/成员/天)",
    "/Member/day)": "/成员/天)",
    "/day": "/天)",
    "Member/Day": "成员/天",
    "% of getting busted": "% 几率被抓",
    "% progress": "% 进度",
    "per day/Altar)": "每天/祭坛）",
    "Not. per day/Cultist Training Grounds)": "恶名每天/邪教训练场）",
    "Souls per Sacrifice": "灵魂每次牺牲",
    "Souls per Sacrifice/Altar)": "灵魂每次牺牲/祭坛)",
    "Guns/day)": "玩具枪/天)",
    "Members/day)": "成员/天)",
    "HP/day)": "生命值/天)",
    "Experienced Pick-Pocketer": "经验丰富的扒手",
    "Be able to find Jewelry Stores": "能够找到珠宝店",
    "Be able to meet Shady Strangers": "能够结识阴暗的陌生人",
    "Burst of Courage": "勇气的爆发",
    "Crowd Diversion": "人群疏导",
    "Diamonds Are Forever": "钻石恒久远",
    "Double your pickpocket profits": "让扒窃利润翻倍",
    "Lesser of Two Evils": "两害相权取其轻",
    "Meet Shadier Strangers": "认识沙迪尔陌生人",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^被捕(.+)$/,
    /^犯罪(.+)$/,
    /^快捷键(.+)$/,
    /^成本(.+)$/,
    /^(.+)恶名$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^\+\$([\d\.]+)$/,
    /^\-\$([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^: ([\d\.]+)$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You sold (.+) Guns Guns and earned (.+)$/, '您出售了 $1 玩具枪 并赚取 $2'],
    [/^You need a minimum of (.+) Gang Members and (.+) Guns$/, '您至少需要 $1 名帮派成员和 $2 玩具枪'],
    [/^Armed Robbery \((.+) G.M, (.+) Guns\)$/, '武装抢劫（$1 帮派成员，$2 玩具枪）'],
    [/^You sacrifice the stranger and harvest (.+) Souls$/, '你牺牲了陌生人并收获 $1 灵魂'],
    [/^Pickpocket has (.+) Crime Penalty$/, '扒窃有 $1 犯罪罚金'],
    [/^You sold (.+) Stolen Goods Stolen Goods and earned (.+)$/, '您出售了 $1 盗窃的商品并赚取了 $2'],
    [/^You sold (.+) Stolen Jewels Stolen Jewels and earned (.+)$/, '您出售了 $1 盗窃的珠宝并赚取了 $2'],
    [/^Lose (.+) of your money$/, '损失 $1 的钱'],
    [/^You and your squad rob the store, (.+) Not. and (.+)$/, '你和你的小队抢劫了商店，$1 恶名 和 $2'],
    [/^You tag the side of a store and earn (.+) Not.$/, '您标记商店的一侧并赚取 $1 恶名'],
    [/^You share your misdeeds and misadventures. You gain (.+) Not.$/, '你分享你的错误行为和不幸经历。 你获得 $1 恶名'],
    [/^(.+): Purchased Upgrade \'$/, '$1: 已购买升级 \''],
    [/^(.+): You share your misdeeds and misadventures. You gain (.+) Not.$/, '$1: 你分享你的错误行为和不幸经历。 你获得 $2 恶名'],
    [/^(.+): You shoplift (.+)$/, '$1: 你入店行窃 $2'],
    [/^(.+): You pickpocket (.+)$/, '$1: 你扒窃了 $2'],
    [/^(.+): Busted! You lose (.+)$/, '$1: 你被捕了！你失去了 $2'],
    [/^(.+) Gang Members \((.+)\)$/, '$1 帮派成员 \($2\)'],
    [/^(.+) Stolen Jewels \((.+)\)$/, '$1 被盗珠宝 \($2\)'],
    [/^(.+) Stolen Goods \((.+)\)$/, '$1 被盗物品 \($2\)'],
    [/^(.+) and (.+) Stolen Goods$/, '$1 和 $2 被盗物品'],
    [/^(.+) and (.+) Stolen Jewels$/, '$1 和 $2 被盗的珠宝'],
    [/^\((.+) Souls per Gang Member \((.+) Total\) per Sacrifice\/Cultist Training Grounds\)$/, '（每个献祭\/邪教徒训练场每个帮派成员 $1 灵魂（$2 总计））'],
    [/^(.+) Souls per Gang Member \((.+) Total\) per Sacrifice$/, '每次牺牲每个帮派成员 $1 灵魂（$2 总计）'],
    [/^\-(.+) Not. per day$/, '\-$1 恶名每天'],
    [/^\-(.+) per day$/, '\-$1 每天'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/([\d\.,]+) Guns$/, '$1\/$2 玩具枪'],
	[/^([\d\.,]+)\/([\d\.,]+) Members$/, '$1\/$2 成员'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) Souls$/, '$1 灵魂'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+([\d\.]+) Max Gang Member$/, '\+$1 帮派成员上限'],
    [/^\+([\d\.]+) Cultist Training Grounds$/, '\+$1 邪教徒训练场'],
    [/^\+([\d\.]+) Gang Member$/, '\+$1 帮派成员'],
    [/^\+([\d\.]+) Stolen Jewels$/, '\+$1 被盗的珠宝'],
    [/^\+([\d\.]+) Stolen Goods from Shoplifting$/, '\+$1 商店行窃中被盗的物品'],
    [/^x([\d\.]+) Mugging Money Reward$/, 'x$1 抢劫金钱奖励'],
    [/^x([\d\.]+) Money from Mugging$/, 'x$1 抢劫所得的钱'],
    [/^\+([\d\.]+) Altar$/, '\+$1 祭坛'],
    [/^\+([\d\.]+) Souls$/, '\+$1 灵魂'],
    [/^\+([\d\.]+) Not.$/, '\+$1 恶名'],
    [/^\-([\d\.]+) Not.$/, '\-$1 恶名'],
    [/^\-([\d\.]+) Cultist Training Grounds$/, '\-$1 邪教训练场'],
    [/^\-([\d\.]+) Fake Identity$/, '\-$1 虚假身份'],
    [/^\-([\d\.]+) Souls$/, '\-$1 灵魂'],
    [/^\-([\d\.]+) Shoplift Crime penalty$/, '\-$1 入店行窃犯罪处罚'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) days remaining$/, '剩余 $1 天'],
    [/^([\d\.,]+) Not.$/, '$1 恶名'],
    [/^([\d\.,]+) day remaining$/, '剩余 $1 天'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);