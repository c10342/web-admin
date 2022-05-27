<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { isTags } from "@/utils/tags";
import { defineComponent, watch } from "@vue/runtime-core";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();

    const getTitle = (route: RouteLocationNormalizedLoaded) => {
      if (route.meta && route.meta.title) {
        return route.meta.title as string;
      } else {
        const arr = route.path.split("/");
        return arr[arr.length - 1];
      }
    };
    watch(
      route,
      (to, from) => {
        if (!isTags(to.path)) {
          return;
        }

        const { fullPath, meta, name, params, path, query } = to;
        store.commit("AppModule/addTagsView", {
          fullPath,
          meta,
          name,
          params,
          path,
          query,
          title: getTitle(to),
        });
      },
      { immediate: true }
    );
    return {};
  },
});
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 93px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;

  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter-form {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
