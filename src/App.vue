<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import zhCn from "element-plus/lib/locale/lang/zh-cn";
import enUs from "element-plus/lib/locale/lang/en";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const locale = computed(() => {
      return store.getters.language === "en" ? enUs : zhCn;
    });
    return {
      locale,
    };
  },
});
</script>
