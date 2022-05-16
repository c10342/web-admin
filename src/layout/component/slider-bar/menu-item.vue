<template>
  <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length">
    <template #title>
      <MenuTitle :title="menu.meta.title" :icon="menu.meta.icon" />
    </template>
    <MenuItem
      v-for="subMenu in menu.children"
      :menu="subMenu"
      :key="subMenu.path"
    />
  </el-sub-menu>
  <el-menu-item :index="menu.path" :route="{ name: menu.name }" v-else>
    <MenuTitle :title="menu.meta.title" :icon="menu.meta.icon" />
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteRecordRaw } from "vue-router";
import MenuTitle from "./menu-title.vue";

interface MenuData {
  meta: {
    title: string;
    icon: string;
  };
  children: Array<RouteRecordRaw & MenuData>;
}

export default defineComponent({
  name: "MenuItem",
  components: { MenuTitle },
  props: {
    menu: {
      type: Object as PropType<RouteRecordRaw & MenuData>,
      default: () => ({}),
    },
  },
});
</script>
