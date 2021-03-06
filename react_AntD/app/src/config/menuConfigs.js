const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/ui/button'
            },
            {
                title: '弹框',
                key: '/ui/modals'
            },
            {
                title: 'Loading',
                key: '/ui/loading'
            },
            {
                title: '通知提醒',
                key: '/ui/notification'
            },
            {
                title: '全局Message',
                key: '/ui/messages'
            },
            {   
                title: 'Tab标签',
                key: '/ui/tabs'
            },  
            {
                title: '图片画廊',
                key: '/ui/gallery'
            },
            {
                title: '轮播图',
                key: '/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        children: [
           {
            title: '登录',
            key: '/form/login'
           },
           {
               title: '注册',
               key: '/form/reg'
           }
        ]
    },
    {
        title: '表格',
        key: '/table',
        children:[
            {
                title: '基础表格',
                key: '/table/basictable'
            },
            {
                title: '高级表格',
                key: '/table/advancetable'
            }
        ]
    },
    {
        title: '富文本',
        key: '/word'
    },
    {
        title: '城市管理',
        key: '/city'
    },
    {
        title: '订单管理',
        key: '/order'
    },
    {
        title: '员工管理',
        key: '/works'
    },
    {
        title: '车辆地图',
        key: '/car'
    },
    {
        title: '图表',
        key: '/charts',
        children: [
            {
                title: '折线形',
                key: '/charts/ployline'
            },{
                title: '柱状图',
                key: '/charts/bar'
            },{
                title: '饼图',
                key:'/charts/pie'
            }
        ]
    },
    {
        title: '权限设置',
        key: '/permission'
    }
]

export default menuList