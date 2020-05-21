// todo
export interface Todo {
  id: string;
  index: number;
  title: string;
  content: string;
  checked: boolean;
}

export interface TodoState {
  list: Todo[];

  undoList: string[];

  redoList: string[];
}
