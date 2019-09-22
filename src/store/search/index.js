const search = {
  state: {
    hotOffsetY: 0,
    flapCardVisiable:true
  },
  mutations: {
    'SET_SEARCH_OFFSETY': (state, offset) => {
      state.hotOffsetY = offset
    },
    'SET_FLAP_CARD_VISIABLE': (state, visiable) => {
      state.flapCardVisiable = visiable
    }
  },
  actions: {
  //   setFileName: ({commit}, fileName) => {
  //     return commit('SET_FILE_NAME', fileName)
  //   },
  //   setMenuVisible: ({commit}, visible) => {
  //     console.log(visible, 'lllll')
  //     return commit('SET_FILE_NAME', visible)
  //   }
  }
};
export default search;
