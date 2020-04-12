export default {

    list(state) {
        return state.list
    },

    undoList(state) {
        return state.undoList
    },

    canUndo(state) {
        return state.undoList.length > 0
    },

    redoList(state) {
        return state.redoList
    },

    canRedo(state) {
        return state.redoList.length > 0
    },
    
}