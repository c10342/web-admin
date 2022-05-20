export interface RootData {
  [key: string]: any;
}

export interface UserData {
  [key: string]: any;
  token: string;
}

export interface AppData {
  sliderBarOpened: boolean;
  language: string;
  [key: string]: any;
}
