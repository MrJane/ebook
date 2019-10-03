import _shelfList from "../../views/shelf/shelfList";
const shelf = {
    state: {
        isEditMode: false, //是否编辑模式
        shelfList: _shelfList, //书架图书列表
        shelfSelected:[],//已选中的图书
        showShelfTitle:true,//是否显示标题
    },
    mutations: {
        'SET_IS_EDIT_MODE': (state, mode) => { //设置编辑模式
            state.isEditMode = mode
        },
        'SET_SHELF_LIST': (state, list) => {
            state.shelfList = list
        },
        'SET_SHELF_SELECTED': (state, selected) => {
            state.shelfSelected = selected
        },
        'SET_SHELF_TITLE_SHOW': (state, visible) => {
            state.showShelfTitle = visible
        }
    },
    actions: {}
};
export default shelf;
