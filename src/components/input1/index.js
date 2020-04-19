import Vue from 'vue'
import Router from 'vue-router'
import aaa from '@/components/Input1/aaa'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {//Menu
            path: '/aaa',
            name: 'aaa',
            component: aaa
        }
    ]
})