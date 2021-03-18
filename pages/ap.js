// poost:function(){
//   wx.request({
//     url: 'http://127.0.0.1:8000/api/test/',
//     method:'POST',
//     header:{
//       "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
//     },
//     data:{
//       mname: this.data.mname,
//           clent_name: this.data.clent_name,
//           id_code: this.data.id_code,
//           id_phone:this.data.id_phone,
//           choice_lipin: this.data.choice_lipin,
//     },
      
//     success: res => {
//       console.log(res);
//       if (res.statusCode == 200) {
//         this.setData({
//           result: res.data
//         })
//       }
//     }
//   })
// },