import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from "@/store"

const Home = () => import('pages/home/Home')
const Profile = () => import('pages/profile/Profile')
const Search = () => import('pages/search/Search')
const Searching = () => import('pages/searching/Searching')
const Searched = () => import('pages/searched/Searched')

const routes = [
    { path: '', redirect: '/home' },
    {
        path: '/home',
        component: Home,
        meta: { title: '音乐馆' },
    },
    {
        path: '/profile',
        component: Profile,
        meta: { title: '我的' },
    },
    {
        path: '/search',
        component: Search,
        meta: { title: '搜索' },
        children: [
            { path: '', redirect: 'searching' },
            { path: 'searched', component: Searched },
            { path: 'searching', component: Searching },
        ]
    }
]

const router = new VueRouter({
    routes,
})
// router.beforeEach((to, from, next) => {
//     console.log('global');
//     next();
// })

export default router;