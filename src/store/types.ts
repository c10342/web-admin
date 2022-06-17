import { RouteRecordRaw } from "vue-router";

export interface RootData {
  [key: string]: any;
}

export interface UserData {
  [key: string]: any;
  token: string;
  userInfo: any;
}

export interface TagsViewItem {
  fullPath: string;
  meta: Record<string, any>;
  name: string;
  params: Record<string, any>;
  path: string;
  query: Record<string, any>;
  title: string;
}

export interface AppData {
  sliderBarOpened: boolean;
  language: string;
  tagsViewList: TagsViewItem[];
  [key: string]: any;
}

export interface PermissionData {
  routes: RouteRecordRaw[];
}
