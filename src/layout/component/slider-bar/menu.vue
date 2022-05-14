<template>
  <el-scrollbar height="100%">
    <el-menu
      active-text-color="#fff"
      text-color="#bfcbd9"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      router
    >
      <MenuItem :list="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import menuList from "./menu";
import MenuItem from "./menu-item.vue";
const route = useRoute();
const defaultActive = computed(() => {
  return route.name;
});
</script>
