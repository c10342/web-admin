<template>
  <!-- 外部图标 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <!-- 内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { isExternal as external } from "@/utils/vaildate";
import { computed } from "vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

// 判断是否为外部图标
const isExternal = computed(() => external(props.icon));

// 外部图标样式
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    "-webkit-mask": `url(${props.icon}) no-repeat 50% 50%`,
  };
});
// 内部图标
const iconName = computed(() => {
  return `#icon-${props.icon}`;
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.vg-external-icon {
  background-color: currentColor;
  display: inline-block;
  mask-size: cover !important;
}
</style>
