<template>
  <i v-if="icon.includes('el-icon')" :class="icon"></i>
  <SvgIcon v-else :icon="icon" />
  <span class="menu-title">{{ title }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.menu-title {
  margin-left: 16px;
}
</style>
