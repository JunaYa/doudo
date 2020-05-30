import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { todo } from './module/todo/index';
import { setting } from './module/setting/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.0.1'
  },
  modules: {
    todo,
    setting
  }
};
export default new Vuex.Store<RootState>(store);
