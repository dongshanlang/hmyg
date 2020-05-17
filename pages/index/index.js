//Page Object
Page({
    data: {
        //轮播图数组
        swiperList: [

        ]
    },
    //页面开始加载，就会触发
    onLoad: function(options) {
        wx.request({
            url: 'http://127.0.0.1:8080/api/home/swiperdata',
            success: (result) => {
                console.log(result);
            }
        })
    }
});