// pages/details/page7/page7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'http://wsk.neea.edu.cn/',
    baoming:'https://member.neea.cn/login/new?returnUrl=http%3A%2F%2Forder.neea.cn%2FfirstFlowNode%2F05',
    chaxun:'http://wsk.neea.edu.cn/html1/folder/1508/206-1.htm?sid=409',
    kaodian:'http://wsk.neea.edu.cn/html1/folder/1507/1632-1.htm'

  },
  go: function (e){//event对象
    console.log('我要传入的值',e)
    let data = e.currentTarget.dataset.content
    console.log('我传入的网址',data)
    let str =  JSON.stringify(data)
    wx.navigateTo({
        url: '/pages/links/links?jsonstr=' + str ,
      })
  },
  go2: function (e){//event对象
    console.log('我要传入的值',e)
    let data = e.currentTarget.dataset.baoming
    console.log('我传入的网址',data)
    let str =  JSON.stringify(data)
    wx.navigateTo({
        url: '/pages/links/links?jsonstr=' + str ,
      })
  },
  go3: function (e){//event对象
    console.log('我要传入的值',e)
    let data = e.currentTarget.dataset.chaxun
    console.log('我传入的网址',data)
    let str =  JSON.stringify(data)
    wx.navigateTo({
        url: '/pages/links/links?jsonstr=' + str ,
      })
  },
  go4: function (e){//event对象
    console.log('我要传入的值',e)
    let data = e.currentTarget.dataset.zhunkaozheng
    console.log('我传入的网址',data)
    let str =  JSON.stringify(data)
    wx.navigateTo({
        url: '/pages/links/links?jsonstr=' + str ,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})