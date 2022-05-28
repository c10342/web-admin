<template>
  <el-tooltip
    effect="dark"
    :content="isFullscreen ? getText('exit') : getText('enter')"
    placement="bottom"
    v-if="isEnabled"
  >
    <div @click="onClick" class="screenfull" id="screenfull">
      <SvgIcon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
    </div>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import screenfull from "screenfull";
import { getI18nText } from "@/utils/i18n";

export default defineComponent({
  setup() {
    const isEnabled = screenfull.isEnabled;
    const isFullscreen = ref(false);
    const onClick = () => {
      screenfull.toggle();
    };
    const onChange = () => {
      isFullscreen.value = screenfull.isFullscreen;
    };
    const getText = getI18nText("screenfull");
    onMounted(() => {
      screenfull.on("change", onChange);
    });
    onBeforeUnmount(() => {
      screenfull.off("change", onChange);
    });
    return {
      onClick,
      isEnabled,
      isFullscreen,
      getText,
    };
  },
});
</script>

<style lang="scss" scoped>
.screenfull {
  margin-right: 20px;
  cursor: pointer;
}
</style>
