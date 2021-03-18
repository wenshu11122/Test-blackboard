var filmNullTip = {
      tipText: '亲，找不到考试的收藏',
    }
var personNullTip = {
      tipText: '亲，找不到信息的收藏',
    }
Page({
  data:{
    film_favorite: [],
    person_favorite: [],
    show: 'film_favorite',
    nullTip: filmNullTip
  },
  onLoad:function(options){
    var that = this
    wx.getStorage({
      key: 'film_favorite',
      success: function(res){
        that.setData({
          film_favorite: res.data
        })
      }
    })
    wx.getStorage({
      key: 'person_favorite',
      success: function(res){
        that.setData({
          person_favorite: res.data
        })
      }
    })
    wx.stopPullDownRefresh()
  },
  viewFilmDetail: function(e) {
		var data = e.currentTarget.dataset
		wx.redirectTo({
			url: "../filmDetail/filmDetail?id=" + data.id
		})
  },
  viewPersonDetail: function(e) {
		var data = e.currentTarget.dataset
		wx.redirectTo({
			url: "../personDetail/personDetail?id=" + data.id
		})
  },
  changeViewType: function(e) {
    var data = e.currentTarget.dataset
    this.setData({
      show: data.type,
      nullTip: data.type == 'film_favorite' ? filmNullTip : personNullTip
    })
  }
})