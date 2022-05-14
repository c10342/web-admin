<template>
  <div class="app-container">
    <SliderBar />
    <div class="main-container">
      <div class="fix-header">
        <NavBar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SliderBar from "./component/slider-bar/index.vue";
import NavBar from "./component/nav-bar.vue";
import AppMain from "./component/app-main.vue";
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 210px);
    transition: width 0.28s;
  }
}
</style>
