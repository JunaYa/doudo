export interface Theme {
  backgroundColor: string;
}

export interface Structure {
  separator: number; // 侧边栏宽度
}

export interface Config {
  structure: Structure;
  language: string;
  theme: Theme;
}
