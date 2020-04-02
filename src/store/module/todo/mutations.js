export default {
    add(state, data) {
        state.list.push(data)
        console.log('state list', state.list)
    },

    remove(state, index) {
        state.list.splice(index, 1)
    },

    update(state, { index, newData }) {
        state.list.splice(index, 1, newData)
    }
}