import { GetterTree } from 'vuex';
import { Config, Structure, Theme } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<Config, RootState> = {
  structure(state): Structure {
    return state.structure;
  },

  theme(state): Theme {
    return state.theme;
  }
};
