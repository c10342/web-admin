<template>
  <template v-for="menu in list">
    <el-menu-item
      :key="menu.routeName"
      :index="menu.routeName"
      :route="{ name: menu.routeName }"
      v-if="!menu.children"
    >
      <span>{{ menu.title }}</span>
    </el-menu-item>
    <el-sub-menu :key="menu.routeName" :index="menu.routeName" v-else>
      <template #title>
        <span>{{ menu.title }}</span>
      </template>
      <MenuItem :list="menu.children" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuItem } from "./menu";

export default defineComponent({
  name: "MenuItem",
  props: {
    list: {
      type: Array as PropType<MenuItem[]>,
      default: () => [],
    },
  },
});
</script>
