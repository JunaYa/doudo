import { save } from "../../../utils/storage";
import T from "./contans";

export default {
  [T.UNDO](state, data) {
    try {
      state.undoList.push(JSON.stringify(data));
    } catch (error) {
      console.warn("undo storage error:::", error);
    }
  },

  [T.REDO](state, data) {
    try {
      state.redoList.push(JSON.stringify(data));
    } catch (error) {
      console.warn("undo storage error:::", error);
    }
  },

  [T.CLEAR_REDO](state) {
    state.redoList = [];
  },

  [T.ADD](state, data) {
    state.list = data;
    save(state.list);
  },

  [T.REMOVE](state, data) {
    state.list = data;
    save(state.list);
  },

  [T.UPDATE](state, data) {
    state.list = data;
    save(state.list);
  }
};
