const book = {
  state: {
    fileName: '/2018_Book_AgileProcessesInSoftwareEngine.epub',
    menuVisible:false,
    defaultFontSize:16,
    settingVisible:-1,//-1不显示 0字号 1主题 2进度 3目录
    defaultFontFamily:'Default',
    fontFamilyVisible: false,//显示设置字体弹出层
    offsetY: 0,
  },
  mutations: {
    'SET_FILE_NAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENU_VISIBLE': (state, visible) => {
      state.menuVisible = visible
    },
    'SET_DEFAULT_FONT_SIZE': (state, fontSize) => {
      state.defaultFontSize = fontSize
    },
    'SET_SETTING_VISIBLE': (state, type) => {
      state.settingVisible = type
    },
    'SET_FONT_FAMILY_VISIBLE': (state, visible) => {
      state.fontFamilyVisible = visible
    },
    'SET_DEFAULT_FONT_FAMILY': (state, font) => {
      state.defaultFontFamily = font
    },
    'SET_OFFSETY': (state, offsetY) => {
      state.offsetY = offsetY
    },
  },
  actions: {
    setFileName: ({commit}, fileName) => {
      return commit('SET_FILE_NAME',fileName)
    },
    setMenuVisible: ({commit}, visible) => {
    console.log(visible,'lllll')
      return commit('SET_FILE_NAME',visible)
    }
  }
}
export default book;
