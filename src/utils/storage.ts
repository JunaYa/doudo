import { Todo } from '@/store/module/todo/types';

const TODO_LIST = 'todo-list';

/**
 * 获取 todo list
 */
export function getTodoList(): Todo[] {
  try {
    const data = window.localStorage.getItem(TODO_LIST);
    if (!data) return [];
    return JSON.parse(data) as Todo[];
  } catch (error) {
    console.log('TODO_LIST', error);
    return [];
  }
}

/**
 * 存储 todo-list
 * @param {Array} data
 */
export function saveTodoList(data: Todo[]): void {
  window.localStorage.setItem(TODO_LIST, JSON.stringify(data));
}
