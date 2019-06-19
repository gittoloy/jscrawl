export default {
    // 网站首页
    homepage: "",
    // 请求间隔
    requestinterval: 1000,
    // 请求头
    headers: {

    },
    // 登录配置
    login: {

    },

    // 请求前中间件
    beforerequest: [{
        url: /.*/,
        function: null
    }],

    // 请求后处理中间件
    requestcomplete: [{
        url: /.*/,
        function: null
    }],

    // 请求顺序路径
    requestpath: [
        "listpage",
        "detailpage"
    ],

    // 入口
    entry: [{
        name: "listpage",
        url: "https://api.hipac.cn/process/prod/1.0.2/mall.item.searchItemListWithFlashBuyAct.pc/",
        method: "post",
        formData: {
            appKey: "1300",
            data: {
                "dev": "prod",
                "pageNo": 1,
                "pageSize": 20,
                "cateIds": "262",
                "sortType": "3",
                "itemSearchTypes": "",
                "itemChildTypes": null,
                "searchSource": "cate"
            },
            os: "Chrome",
            sign: "",
            t: "`${timestamp}`"
        },
        // 循环
        loop: {
            start: {
                pageIndex: 1,
                pageSize: 20,
            },
            end: {

            }
        },
        result: {

        },
        
    }]
}