import { MutationTree } from 'vuex';
import { Config, Theme, Structure } from './types';
import {
  setThemeConfig,
  getThemeConfig,
  setStructureConfig,
  getStructureConfig,
  setLanguageConfig,
  getLanguageConfig
} from '@/utils/storage';

import T from '../../contans';

export const mutations: MutationTree<Config> = {
  [T.INIT_SETTING](state) {
    state.theme = getThemeConfig();
    state.structure = getStructureConfig();
    state.language = getLanguageConfig();
  },

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
  },

  [T.UPDATE_LANGUAGE](state, language: string) {
    state.language = language;
    setLanguageConfig(language);
  },

  [T.GET_LANGUAGE](state) {
    state.language = getLanguageConfig();
  }
};
