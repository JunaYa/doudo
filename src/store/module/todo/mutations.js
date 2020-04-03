import {
    save,
} from '../../../utils/storage'

export default {
    add(state, data) {
        state.list.push(data)
        console.log('state list', state.list)
        save(state.list)
    },

    remove(state, index) {
        state.list.splice(index, 1)
        save(state.list)
    },

    update(state, { index, newData }) {
        state.list.splice(index, 1, newData)
        save(state.list)
    }
}