import Home from '@/pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'
import GentlemanComic from "@/pages/GentlemanComic/index.vue"
import DoujinshiChiness from '@/pages/GentlemanComic/Doujinshi_Chiness/index.vue'
import Acomic from '@/pages/GentlemanComic/a_comic/index.vue'
import SeeEveryPage from '@/pages/GentlemanComic/SeeEveryPage/index.vue'

export default (
    [
        {
            path:'/SeeEveryPage',
            component:SeeEveryPage,
            name:'SeeEveryPage',
        },
        {
            path:'/Acomic/:id',
            component:Acomic,
            name:'Acomic',
            children:[

            ],
        },
        {
            path: '/DoujinshiChiness',
            component: DoujinshiChiness,
        },
        {
            path: '/GentlemanComic',
            component: GentlemanComic,
            meta: { show: false },

        },
        {
            path: '/home',
            component: Home,
            meta: { show: true },
        },
        {
            path: '/search',
            component: Search,
            meta: { show: true },
        },
        {
            path: "*",
            redirect: "/home"
        },
    ]
)