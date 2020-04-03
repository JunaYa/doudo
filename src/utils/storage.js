const TODO_LIST = 'todo-list'

/**
 * 获取 todo list
 */
export function getTodoList() {
    try {
        const data = window.localStorage.getItem(TODO_LIST)
        if (!data) return []
        return JSON.parse(data)
    } catch (error) {
        console.error('TODO_LIST', error)
        return []
    }
}

/**
 * 存储 todo-list
 * @param {Array} data 
 */
export function save(data) {
    window.localStorage.setItem(TODO_LIST, JSON.stringify(data))
}