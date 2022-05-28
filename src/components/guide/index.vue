<template>
  <el-tooltip effect="dark" :content="getText('guideDesc')" placement="bottom">
    <div @click="onClick" class="guide" id="guide">
      <SvgIcon icon="guide" />
    </div>
  </el-tooltip>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { defineComponent } from "vue";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import steps from "./steps";

export default defineComponent({
  setup() {
    const getText = getI18nText("guide");
    const onClick = () => {
      const driver = new Driver({
        allowClose: false,
        closeBtnText: getText("close"),
        nextBtnText: getText("next"),
        prevBtnText: getText("prev"),
      });
      driver.defineSteps(steps(getText));
      driver.start();
    };
    return {
      getText,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.guide {
  margin-right: 20px;
  cursor: pointer;
}
</style>
