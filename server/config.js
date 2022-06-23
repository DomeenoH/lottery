/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
 const prizes = [{
  type: 0,
  count: 1000,
  title: "",
  text: "特别奖"
  },
  {
    type: 45,
    count: 1,
    text: "缘 · ",
    title: "豌豆荚摄影工具",
    img: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/2200779546537/O1CN0169VpYz1y9zphti4nI_!!0-item_pic.jpg"
  },
  {
    type: 44,
    count: 1,
    text: "星云若雨 · ",
    title: "KFC皮卡丘水壶一个",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F2e8233bf-0ac7-7ad8-e7e7-14c4577332fa%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658588294&t=c529529ecebfb7fc740c63cd2404c8c5"
  },
  {
    type: 43,
    count: 1,
    text: "星云若雨 · ",
    title: "快板一套",
    img: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/323804300/O1CN01E2LKte1hdRbISl8BE_!!323804300.jpg_230x230.jpg"
  },
  {
    type: 42,
    count: 1,
    text: "星云若雨 · ",
    title: "95新章鱼玩偶80cm",
    img: "https://bu.dusays.com/2022/06/23/62b47f2051a43.jpg"
  },
  {
    type: 41,
    count: 1,
    text: "星云若雨 · ",
    title: "肥猫（不包邮）",
    img: "https://bu.dusays.com/2022/06/23/62b47ef56f8b4.jpg"
  },
  {
    type: 40,
    count: 1,
    text: "兔兔 · ",
    title: "拼豆挂件定制",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2201478036175/O1CN01FadQfk1vUCSf4yOU6_!!0-item_pic.jpg"
  },
  {
    type: 39,
    count: 1,
    text: "杰特 · ",
    title: "手搓小锤子一只",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi2%2F1103720702%2FO1CN01IAjzOo1H3YbirobOU_%21%211103720702.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658588075&t=5fa639c374f83520a3a1d95ce7f6cc75"
  },
  {
    type: 38,
    count: 1,
    text: "杰特 · ",
    title: "9新漂移板一对",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2208462591557/O1CN01jJotzZ1NN9I88WNjD_!!0-item_pic.jpg"
  },
  {
    type: 37,
    count: 1,
    text: "多米诺 · ",
    title: "福瑞正太金属小胸针4个",
    img: "https://bu.dusays.com/2022/06/23/62b47e6271abb.png"
  },
  {
    type: 36,
    count: 1,
    text: "多米诺 · ",
    title: "原味宜家鲨鲨一只",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2210571960344/O1CN01Pmf8QL1EPazZrrZy6_!!2210571960344.jpg"
  },
  {
    type: 35,
    count: 1,
    text: "SANIDA · ",
    title: "定制原创花嫁款lolita",
    img: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/26107146/O1CN018jKmH022eutrEEy8C_!!26107146.jpg"
  },
  {
    type: 34,
    count: 1,
    text: "SANIDA · ",
    title: "项链一条",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3080857152/O1CN01Fh4cU822hfPkL1ZfW_!!3080857152.jpg"
  },
  {
    type: 33,
    count: 1,
    text: "缘 · ",
    title: "北影的《电影摄影创作》",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1961939153/O1CN01cOW9w32HU7tBJOTvq_!!0-item_pic.jpg"
  },
  {
    type: 32,
    count: 1,
    text: "破空 · ",
    title: "趣味科普读物4本",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2369322973/O1CN019LH5sY1XpgEob45GA_!!0-item_pic.jpg"
  },
  {
    type: 31,
    count: 1,
    text: "牧佑 · ",
    title: "《活着》余华",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2369322973/O1CN01IELgIv1XpgF0oD3qU_!!0-item_pic.jpg"
  },
  {
    type: 30,
    count: 1,
    text: "一山 · ",
    title: "椒盐牛舌饼一包",
    img: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/4028342104/O1CN013UWuRR1RPg0uORt9b_!!0-item_pic.jpg"
  },
  {
    type: 29,
    count: 1,
    text: "叶 · ",
    title: "雪碧可乐各一瓶",
    img: "https://img1.baidu.com/it/u=76024761,683861554&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  },
  {
    type: 28,
    count: 1,
    text: "熊掌 · ",
    title: "冷萃咖啡一瓶",
    img: "https://img1.baidu.com/it/u=4182485735,995985998&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  },
  {
    type: 27,
    count: 1,
    text: "星云若雨 · ",
    title: "威士忌口味自选",
    img: "https://img0.baidu.com/it/u=1933272462,2558829694&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  },
  {
    type: 26,
    count: 1,
    text: "云云 · ",
    title: "土豆泥一箱（黑胡椒鸡蓉口味）",
    img: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/1669874709/O1CN01mDIpRs1kelpXxdq3k_!!0-item_pic.jpg"
  },
  {
    type: 25,
    count: 1,
    text: "红薯丸子 · ",
    title: "咖啡浓缩液1袋",
    img: "https://img1.baidu.com/it/u=1326082308,3621429769&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  },
  {
    type: 24,
    count: 1,
    text: "云屾 · ",
    title: "一顿疯狂星期四",
    img: "https://img0.baidu.com/it/u=1937665916,307154246&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
  },
  {
    type: 23,
    count: 1,
    text: "掰掰牛 · ",
    title: "一顿疯狂星期四",
    img: "https://img0.baidu.com/it/u=1937665916,307154246&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
  },
  {
    type: 22,
    count: 1,
    text: "SANIDA · ",
    title: "一箱樱花酒",
    img: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2200559018786/O1CN01Bzoz1P2Em2b9D0On0_!!2200559018786.jpg"
  },
  {
    type: 21,
    count: 5,
    text: "瑟瑟 · ",
    title: "单次心理咨询x5",
    img: "https://bu.dusays.com/2022/06/23/62b486e4d598a.jpg"
  },
  {
    type: 20,
    count: 1,
    text: "丹曦 · ",
    title: "线上塔罗占卜一次（不保准）",
    img: "https://img0.baidu.com/it/u=2194073843,2481586342&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  },
  {
    type: 19,
    count: 1,
    text: "缘 · ",
    title: "Adobe猫片合集",
    img: "https://bu.dusays.com/2022/06/23/62b47bde5c756.png"
  },
  {
    type: 18,
    count: 1,
    text: "铝锌 · ",
    title: "简笔画一幅",
    img: "https://bu.dusays.com/2022/06/23/62b47868c09a1.png"
  },
  {
    type: 15,
    count: 1,
    text: "天虎 · ",
    title: "bigbia的key+定制mod角色1个",
    img: "https://img2.baidu.com/it/u=151620766,3144749972&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500"
  },
  {
    type: 14,
    count: 1,
    text: "天虎 · ",
    title: "bigbia的key或者单人小蛋糕",
    img: "https://img2.baidu.com/it/u=151620766,3144749972&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500"
  },
  {
    type: 13,
    count: 1,
    text: "多米诺 · ",
    title: "微软E5账号1个",
    img: "https://img1.baidu.com/it/u=1177073339,1229844696&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=281"
  },
  {
    type: 12,
    count: 1,
    text: "破空 · ",
    title: "typora或者IDM或者WGestures2的key",
    img: "https://img0.baidu.com/it/u=3696265634,1526834780&fm=253&fmt=auto&app=138&f=PNG?w=256&h=256"
  },
  {
    type: 11,
    count: 1,
    text: "破空 · ",
    title: "彼处水如酒key",
    img: "https://img2.baidu.com/it/u=3140256484,858219165&fm=253&fmt=auto&app=138&f=JPEG?w=639&h=272"
  },
  {
    type: 10,
    count: 1,
    text: "XD · ",
    title: "恶灵附身2Key | 或者一瓶快乐水",
    img: "http://t15.baidu.com/it/u=1017252593,3868139599&fm=224&app=112&f=JPEG?w=500&h=500"
  },
  {
    type: 9,
    count: 1,
    text: "SANITA · ",
    title: "steam随机三个key",
    img: "https://img2.baidu.com/it/u=555895331,4287967265&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=375"
  },
  {
    type: 8,
    count: 1,
    text: "狐狸 · ",
    title: "半年内带团|剧本杀带车",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fpview%2Fevent_poster%2Fraw%2Fpublic%2F594d4285dd647aa.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658585260&t=ed1954f88ef5cf1ee0c1302c15b98085"
  },
  {
    type: 7,
    count: 1,
    text: "牧佑 · ",
    title: "百度网盘个人收藏-精品合集",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01181c5e7daaf4a8012165184b31ca.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658585204&t=70d2516986635bfffaa6aed1099c002b"
  },
  {
    type: 6,
    count: 1,
    text: "叶 · ",
    title: "百度网盘黄油资源",
    img: "https://bu.dusays.com/2022/06/23/62b454627a9dd.png"
  },
  {
    type: 5,
    count: 1,
    text: "叶 · ",
    title: "BLACKSOUL一代和二代游戏资源",
    img: "https://img2.baidu.com/it/u=320677292,1186588575&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=251"
  },
  {
    type: 4,
    count: 1,
    text: "狐狸 · ",
    title: "帮找成人游戏|漫画|视频",
    img: "https://bu.dusays.com/2022/06/23/62b454f2b8a3b.png"
  },
  {
    type: 3,
    count: 1,
    text: "掰掰牛 · ",
    title: "偷来的电影资源",
    img: "https://bu.dusays.com/2022/06/23/62b45490dc249.png"
  },
  {
    type: 2,
    count: 1,
    text: "掰掰牛 · ",
    title: "小黄油网站",
    img: "https://bu.dusays.com/2022/06/23/62b454627a9dd.png"
  },
  {
    type: 1,
    count: 1,
    text: "SANIDA · ",
    title: "300瓶巨匠药水",
    img: "https://bu.dusays.com/2022/06/23/62b45404d4e3f.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
