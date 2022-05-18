<template>
  <span class="hamburger-container" @click="onClick">
    <SvgIcon :icon="icon" />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const icon = computed(() => {
      return store.getters.sliderBarOpened
        ? "hamburger-opened"
        : "hamburger-closed";
    });
    const onClick = () => {
      store.commit("AppModule/triggerSliderBarOpened");
    };
    return {
      icon,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.hamburger-container {
  cursor: pointer;
  line-height: var(--nav-bar-height);
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.5s;
  padding: 0 16px;
}
</style>
