const book = {
  state: {
    fileName: '/2015_Book_PerspectivesOnEuropeanEarthqua.epub'
  },
  mutations: {
    'SET_FILE_NAME': (state, fileName) => {
      state.fileName = fileName
    }
  },
  actions: {
    setFileName: ({commit}, fileName) => {
      return commit('SET_FILE_NAME',fileName)
    }
  }
}
export default book;