import { MutationTree } from 'vuex';
import { Config, Theme, Structure } from './types';
import {
  setThemeConfig,
  getThemeConfig,
  setStructureConfig,
  getStructureConfig
} from '@/utils/storage';

import T from '../../contans';

export const mutations: MutationTree<Config> = {
  [T.UPDATE_THEME](state, theme: Theme) {
    state.theme = theme;
    setThemeConfig(theme);
  },

  [T.GET_THEME](state) {
    state.theme = getThemeConfig();
  },

  [T.UPDATE_STRUCTURE](state, structure: Structure) {
    state.structure = structure;
    setStructureConfig(structure);
  },

  [T.GET_STRUCTURE](state) {
    state.structure = getStructureConfig();
  }
};
