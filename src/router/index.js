import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Layout'
//引入组件
Vue.use(VueRouter)

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Layout,
            redirect:'/home',
            children:[{
                path:'/home',
                name:'Home',
                component:() => import('@/views/redirect/Home'),
                meta:{title:'首页', icon: 'el-icon-s-tools'}
            }]
        },
        {
            path: '/login',
            component: () => import('@/views/login/index'),
            hidden: true
        }
    ]
})