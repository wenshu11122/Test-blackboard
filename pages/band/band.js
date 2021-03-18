// pages/shoucang/shoucang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    performance: [{
      name: "关于组织推荐教育部课程思政示范项目的通知",
      time: "2021-03-18",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11228&columnId=265",
    },
    {
      name: "关于本学期公共选修网络课程开课的通知",
      time: "2021-03-18",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11227&columnId=265",
    },
    {
      name: "关于申报内蒙古工业大学创新创业教育平台项目的通知",
      time: "2020-03-17",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11226&columnId=265",
    },
    {
      name: "关于组织“智慧教室”使用培训的通知",
      time: "2020-03-17",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11225&columnId=265",
    },
    {
      name: "关于做好2021年院级“大学生创新实验计划”立项项目资助及管理工作的通知",
      time: "2020-03-16",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11224&columnId=265",
    },
    {
      name: "关于2020/2021年度《国家学生体质健康标准》测试各年级补测的通知",
      time: "2020-03-16",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11223&columnId=265",
    },
    {
      name: "关于组织校级课程思政专题教改项目结题验收工作的通知",
      time: "2020-03-15",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11222&columnId=265",
    },
    {
      name: "关于2021年6月大学英语四、六级及小语种考试网上报名工作的通知",
      time: "2020-03-15",
      link: "http://jwch.imut.edu.cn/jwzx/infoSingleArticle.do?articleId=11221&columnId=265",
    },
  ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:8000/api/test/',
      method:'post',
      data:{
        name:'',
        time:'',
        link:''
      },
      success: res => {
        if (res.statusCode == 200) {
          console.log(res)
          this.setData({
            result: res.data
          })
        }
      }
    })

  },
  copyText: function (e) {
    console.log(e)
    wx.setClipboardData({
    data: e.currentTarget.dataset.text,
    success: function (res) {
    wx.getClipboardData({
    success: function (res) {
    wx.showToast({
    title: '复制成功'
    })
    }
    })
    }
    })
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