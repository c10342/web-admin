<template>
  <div
    id="slider-bar"
    class="slider-bar"
    :class="sliderBarOpened ? 'slider-bar-closed' : 'slider-bar-opened'"
  >
    <Menu></Menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { computed } from "vue";
import { useStore } from "vuex";
import Menu from "./menu.vue";

export default defineComponent({
  components: { Menu },
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
.slider-bar {
  transition: width 0.28s;
  width: var(--menu-width) !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: rgb(48, 65, 86);
  &.slider-bar-closed {
    width: var(--menu-closed-width) !important;
  }
}
</style>
