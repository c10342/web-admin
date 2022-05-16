<template>
  <div class="slider-bar">
    <Menu></Menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Menu from "./menu.vue";

export default defineComponent({
  components: { Menu },
});
</script>

<style lang="scss" scoped>
.slider-bar {
  transition: width 0.28s;
  width: 210px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: rgb(48, 65, 86);
}
</style>
