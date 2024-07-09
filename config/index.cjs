/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx871bb25bf6b6880b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'dbf730bf1c78740373c3cd87f6a7adec',

  PROVINCE: '陕西',
  CITY: '西安',
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '49b46e8c871342a41bc4413cd788462e',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 0,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 5,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'title',
  },
  USERS: [
    {
      // 想要发送的人的名字
      name: '范爷',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oiFLf6ZO5xT6XcWACzD4Fl_FNt8k',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AXg-bUkl5MEWLv-keT5sfcOBG1FO9XHhawbDLBaPMac',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1998', date: '01-19',
        },
      ],
    },
  ],
}

module.exports = USER_CONFIG

