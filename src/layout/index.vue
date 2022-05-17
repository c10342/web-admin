<template>
  <div class="app-container">
    <SliderBar />
    <div
      class="main-container"
      :class="
        sliderBarOpened ? 'main-container-closed' : 'main-container-opened'
      "
    >
      <div class="fix-header">
        <NavBar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import SliderBar from "./component/slider-bar/index.vue";
import NavBar from "./component/nav-bar.vue";
import AppMain from "./component/app-main.vue";
import { defineComponent } from "@vue/runtime-core";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { SliderBar, NavBar, AppMain },
  setup() {
    const store = useStore();
    const sliderBarOpened = computed(() => {
      return store.getters.sliderBarOpened;
    });
    return { sliderBarOpened };
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: var(--menu-width);
  position: relative;
  &.main-container-closed {
    margin-left: var(--menu-closed-width);
    .fixed-header {
      width: calc(100% - var(--menu-closed-width));
    }
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - var(--menu-width));
    transition: width 0.28s;
  }
}
</style>
