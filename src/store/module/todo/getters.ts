import { GetterTree } from 'vuex';
import { TodoState, Todo } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<TodoState, RootState> = {
  list(state): Array<Todo> {
    return state.list;
  },

  undoList(state): Array<string> {
    return state.undoList;
  },

  canUndo(state): boolean {
    return state.undoList.length > 0;
  },

  redoList(state): Array<string> {
    return state.redoList;
  },

  canRedo(state): boolean {
    return state.redoList.length > 0;
  }
};
