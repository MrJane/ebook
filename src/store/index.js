import Vue from 'vue';
import Vuex from 'vuex';
import book from './book/book';
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    book
  },
  getters,
  mutations:{

  },
  actions:{

  }
})