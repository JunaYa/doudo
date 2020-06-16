import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { RootState } from '../../types';
import { TodoState } from './types';

const namespaced = true;

export const todo: Module<TodoState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
