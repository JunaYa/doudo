import { getTodoList } from '../../../utils/storage';

export default {
  list: getTodoList(), // todo list

  undoList: [],

  redoList: []
};
