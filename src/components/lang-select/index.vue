<template>
  <el-dropdown
    class="lang-select-container"
    trigger="click"
    @command="onLangSelect"
  >
    <el-tooltip effect="dark" :content="getText('lang')" placement="bottom">
      <div>
        <SvgIcon icon="language"></SvgIcon>
      </div>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const i18n = useI18n();
    const language = computed(() => {
      return store.getters.language;
    });
    const onLangSelect = (data: string) => {
      i18n.locale.value = data;
      store.commit("AppModule/setLanguage", data);
    };
    const getText = getI18nText("navBar");
    return {
      language,
      onLangSelect,
      getText,
    };
  },
});
</script>

<style lang="scss" scoped>
.lang-select-container {
  float: right;
  margin-right: 24px;
  font-size: 20px;
}
</style>
