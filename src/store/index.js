import Vue from 'vue'
import Vuex from 'vuex'
import book from './book/book'
import search from './search/index'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    book,search
  },
  getters,
  actions
})
