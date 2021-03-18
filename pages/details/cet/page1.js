// pages/details/page1/page1.js
Page({
  poost:function(){
    wx.request({
      url: 'http://127.0.0.1:8000/api/test/',
      method:'POST',
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      data:{
        mname: this.data.mname,
            clent_name: this.data.clent_name,
            id_code: this.data.id_code,
            id_phone:this.data.id_phone,
            choice_lipin: this.data.choice_lipin,
      },
        
      success: res => {
        console.log(res);
        if (res.statusCode == 200) {
          this.setData({
            result: res.data
          })
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    content:'http://pets.neea.edu.cn/',
    baoming:'https://passport.neea.cn/PETSLogin'+"?"+'ReturnUrl=http://pets-bm.neea.edu.cn/Home/VerifyPassport/'+"?"+'LoginType=0',
    chaxun:'http://cet.neea.edu.cn/cet/',
    zhunkaozheng:'http://cet-bm.neea.cn/Home/QueryTestTicket'
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