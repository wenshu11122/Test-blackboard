// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      imgList: [
        '/images/ad1.jpeg',
        '/images/ad2.jpg',
        '/images/ad3.jpg',
        '/images/ad6.jpeg',
        '/images/ad7.jpg',
        '/images/ad8.jpeg',
        '/images/ad9.jpg',
        '/images/ad10.jpg',
        '/images/ad11.jpg',
        '/images/ad12.jpeg',
        '/images/ad13.jpeg'
      ],
     
      swiperCurrent: 0,
  },
  // 事件处理函数
  calculate: function () {
    wx.request({
      url: 'http://127.0.0.1:8000/',
      method:'post',
      data: {
        u:a
      },
      header: { 
        "Content-Type": "application/x-www-form-urlencoded" //POST方式是这个
        },
        
      success: res => {
        if (res.statusCode == 200) {
          console('success')
          this.setData({
            result: res.data
          })
        }
      }
    })
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  jumppage1:function(e){
    wx.navigateTo({
      url: '/pages/details/cet/page1',
    })
  },
  jumppage2:function(e){
    wx.navigateTo({
      url: '/pages/details/ncre/page2',
    })
  },
  jumppage3:function(e){
    wx.navigateTo({
      url: '/pages/details/kaoyan/page3',
    })
  },
  jumppage4:function(e){
    wx.navigateTo({
      url: '/pages/details/jiaoshizigekaoshi/page4',
    })
  },
  jumppage5:function(e){
    wx.navigateTo({
      url: '/pages/details/TOEFL/page5',
    })
  },
  jumppage6:function(e){
    wx.navigateTo({
      url: '/pages/details/IELTS/page6',
    })
  },
  jumppage7:function(e){
    wx.navigateTo({
      url: '/pages/details/WSK/page7',
    })
  },
  jumppage8:function(e){
    wx.navigateTo({
      url: '/pages/details/NIT/page8',
    })
  },
  jumppage9:function(e){
    wx.navigateTo({
      url: '/pages/details/PETS/page9',
    })
  }
})
