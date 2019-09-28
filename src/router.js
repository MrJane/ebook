import Vue from 'vue';
import Router from 'vue-router';
import Ebook from './views/ebook/index'
import EbookReader from './components/ebook/EbookReader';
import EbookStore from './views/store/index';
import StoreHome from './views/store/StoreHome'
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
      component:EbookStore,
      redirect:'/store/search',
      children: [
        {
        path:'search',component:StoreHome}]
    },
  ]
})
