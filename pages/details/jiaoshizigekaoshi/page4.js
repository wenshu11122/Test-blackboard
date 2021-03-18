// pages/details/page4/page4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'http://ntce.neea.edu.cn/',
    baoming:'http://ntce.neea.edu.cn/html1/folder/16013/15-1.htm',
    chaxun:'http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=2nasVMoohJ6cFnsQEIjGYmh',
    zhunkaozheng:'http://ntce.neea.edu.cn/html1/folder/1508/211-1.htm?sid=660'

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