import { Module } from 'vuex';

import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { RootState } from '../../types';
import { Config } from './types';

const namespaced: boolean = true;

export const setting: Module<Config, RootState> = {
  namespaced,
  state,
  getters,
  mutations
};
