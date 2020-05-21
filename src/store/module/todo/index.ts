import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { RootState } from '../../types';
import { TodoState } from './types';

const namespaced: boolean = true;

export const todoModule: Module<TodoState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
