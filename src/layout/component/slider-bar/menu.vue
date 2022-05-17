<template>
  <el-scrollbar height="100%">
    <el-menu
      :collapse="sliderBarOpened"
      active-text-color="#fff"
      text-color="#bfcbd9"
      background-color="#304156"
      class="el-menu-vertical"
      :default-active="defaultActive"
      router
    >
      <MenuItem v-for="menu in menuList" :key="menu.path" :menu="menu" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { filterRoutes, generateMenus } from "@/utils/route";
import { computed, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import MenuItem from "./menu-item.vue";
export default defineComponent({
  components: { MenuItem },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const menuList = computed(() => {
      const filterRoutesArr = filterRoutes(router.getRoutes());

      return generateMenus(filterRoutesArr) as any;
    });

    const defaultActive = computed(() => {
      return route.path;
    });
    const sliderBarOpened = computed(() => {
      return store.getters.sliderBarOpened;
    });
    return {
      menuList,
      defaultActive,
      sliderBarOpened,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  border: none;
  width: 100% !important;
  height: 100%;
}
</style>
