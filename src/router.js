import Vue from 'vue';
import Router from 'vue-router';
import Ebook from './views/ebook/index'
import EbookReader from './components/ebook/EbookReader';
import EbookStore from './views/store/index';
import StoreHome from './views/store/StoreHome';
import List from './views/list/list';
import Detail from './views/detail/detail';
import Shelf from "./views/shelf/Shelf";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'store'
        },
        {
            path: '/ebook',
            component: Ebook,
            children: [
                {
                    path: ':fileName',
                    component: EbookReader
                },
            ]
        },
        {
            path: '/store',
            component: EbookStore,
            redirect: '/store/shelf',
            children: [
                {
                    path: 'search', component: StoreHome
                },
                {
                    path: 'shelf', component: Shelf
                }
            ]
        },
        {path: '/list', component: List},
        {path: '/detail', component: Detail}
    ]
})
