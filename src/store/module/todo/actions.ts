import { ActionTree } from 'vuex';
import { TodoState, Todo } from './types';
import { RootState } from '../../types';
import { getTodoList } from '@/utils/storage';

import T from '../../contans';

const DODO = {
  [T.ADD]: T.REMOVE,
  [T.REMOVE]: T.ADD,
  [T.UPDATE]: T.UPDATE
};

export const actions: ActionTree<TodoState, RootState> = {
  async [T.GET_TODO_LIST]({ commit, state }) {
    return new Promise(resolve => {
      const data = getTodoList();
      commit(T.UPDATE, data);
      resolve(data);
    });
  },

  [T.UNDO]({ dispatch, state }) {
    if (state.undoList.length === 0) return;
    try {
      const action = state.undoList.pop();
      let params = JSON.parse(action || '');
      dispatch(params.action, { ...params.data, from: T.UNDO });
    } catch (error) {
      console.warn('UNDO error:::', error);
    }
  },

  [T.UNDO]({ dispatch, state }) {
    if (state.undoList.length === 0) return;
    try {
      const action = state.undoList.pop();
      let params = JSON.parse(action || '');
      dispatch(params.action, { ...params.data, from: T.UNDO });
    } catch (error) {
      console.warn('UNDO error:::', error);
    }
  },

  [T.REDO]({ dispatch, state }) {
    if (state.redoList.length === 0) return;
    try {
      const action = state.redoList.pop();
      let params = JSON.parse(action || '');
      dispatch(params.action, { ...params.data, from: T.REDO });
    } catch (error) {
      console.warn('UNDO error:::', error);
    }
  },

  [T.ADD]({ commit, state }, { index, data, from }) {
    state.list.splice(index, 0, data);
    commit(T.ADD, state.list);
    if (from && from === T.UNDO) {
      commit(T.REDO, {
        action: DODO[T.ADD],
        data: { index, data }
      });
    } else {
      commit(T.UNDO, {
        action: DODO[T.ADD],
        data: { index, data }
      });
      if (!from) commit(T.CLEAR_REDO);
    }
  },

  [T.REMOVE]({ commit, state }, { index, data, from }) {
    state.list.splice(index, 1);
    commit(T.REMOVE, state.list);
    if (from && from === T.UNDO) {
      commit(T.REDO, {
        action: DODO[T.REMOVE],
        data: { index, data }
      });
    } else {
      commit(T.UNDO, {
        action: DODO[T.REMOVE],
        data: { index, data }
      });
      if (!from) commit(T.CLEAR_REDO);
    }
  },

  [T.UPDATE]({ commit, state }, { index, data, from }) {
    state.list.splice(index, 1, data);
    commit(T.UPDATE, state.list);
    if (from && from === T.UNDO) {
      commit(T.REDO, {
        action: DODO[T.UPDATE],
        data: { index, data }
      });
    } else {
      commit(T.UNDO, {
        action: DODO[T.UPDATE],
        data: { index, data }
      });
      if (!from) commit(T.CLEAR_REDO);
    }
  }
};
