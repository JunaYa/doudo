import { Todo } from '@/store/module/todo/types';
import { Config, Structure, Theme } from '@/store/module/setting/types';
import {
  initConfig,
  initStructure,
  initTheme
} from '@/store/module/setting/state';

const TODO_LIST = 'todo_list';
const SETTING_CONFIG = 'setting_config';
const STRUCTURE_CONFIG = 'structure_config';
const THEME_CONFIG = 'theme_config';
const LANGUAGE = 'language';

/**
 * 获取 todo list
 */
export function getTodoList(): Todo[] {
  try {
    const data = window.localStorage.getItem(TODO_LIST);
    if (!data) return [];
    return JSON.parse(data) as Todo[];
  } catch (error) {
    console.log('TODO_LIST', error);
    return [];
  }
}

/**
 * 存储 todo-list
 * @param {Array} data
 */
export function saveTodoList(data: Todo[]): void {
  window.localStorage.setItem(TODO_LIST, JSON.stringify(data));
}

/**
 * 获取 '全局' 配置
 */
export function getSettingConfig(): Config {
  try {
    const data = window.localStorage.getItem(SETTING_CONFIG);
    if (!data) return initConfig;
    return JSON.parse(data) as Config;
  } catch (error) {
    console.log('SETTING_CONFIG', error);
    return initConfig;
  }
}

/**
 * 设置 '全局' 配置
 * @param data
 */
export function setSettingConfig(data: Config) {
  try {
    window.localStorage.setItem(SETTING_CONFIG, JSON.stringify(data));
  } catch (error) {
    console.log('SETTING_CONFIG', error);
  }
}

/**
 * 获取 app 结构配置
 */
export function getStructureConfig(): Structure {
  try {
    const data = window.localStorage.getItem(STRUCTURE_CONFIG);
    if (!data) return initStructure;
    return JSON.parse(data) as Structure;
  } catch (error) {
    console.log('STRUCTURE_CONFIG', error);
    return initStructure;
  }
}

/**
 * 设置 app 结构配置
 */
export function setStructureConfig(data: Structure) {
  try {
    window.localStorage.setItem(STRUCTURE_CONFIG, JSON.stringify(data));
  } catch (error) {
    console.log('STRUCTURE_CONFIG', error);
  }
}

/**
 * 获取 app 主题配置
 */
export function getThemeConfig(): Theme {
  try {
    const data = window.localStorage.getItem(THEME_CONFIG);
    if (!data) return initTheme;
    return JSON.parse(data) as Theme;
  } catch (error) {
    console.log('THEME_CONFIG', error);
    return initTheme;
  }
}

/**
 * 设置 app 结构配置
 */
export function setThemeConfig(data: Theme) {
  try {
    window.localStorage.setItem(THEME_CONFIG, JSON.stringify(data));
  } catch (error) {
    console.log('THEME_CONFIG', error);
  }
}

/**
 * 设置语言
 */
export function setLanguageConfig(data: string) {
  try {
    window.localStorage.setItem(LANGUAGE, JSON.stringify(data));
  } catch (error) {
    console.log('LANGUAGE_CONFIG', error);
  }
}

/**
 * 获取语言
 */
export function getLanguageConfig() {
  try {
    const data = window.localStorage.getItem(LANGUAGE);
    if (!data) return 'zh';
    return data;
  } catch (error) {
    console.log('LANGUAGE', error);
    return 'zh';
  }
}
