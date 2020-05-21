import { save } from '../../../utils/storage';
import T from './contans';
import { MutationTree } from 'vuex';
import { TodoState } from './types';

export const mutations: MutationTree<TodoState> = {
  [T.UNDO](state, data: any) {
    try {
      state.undoList.push(JSON.stringify(data));
    } catch (error) {
      console.warn('undo storage error:::', error);
    }
  },

  [T.REDO](state, data: any) {
    try {
      state.redoList.push(JSON.stringify(data));
    } catch (error) {
      console.warn('undo storage error:::', error);
    }
  },

  [T.CLEAR_REDO](state) {
    state.redoList = [];
  },

  [T.ADD](state, data: any) {
    state.list = data;
    save(state.list);
  },

  [T.REMOVE](state, data: any) {
    state.list = data;
    save(state.list);
  },

  [T.UPDATE](state, data: any) {
    state.list = data;
    save(state.list);
  }
};
