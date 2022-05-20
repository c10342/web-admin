<template>
  <el-breadcrumb separator="/" class="breadcrumb-container">
    <transition-group name="fade">
      <template v-for="(item, index) in breadcrumbData" :key="item.path">
        <el-breadcrumb-item v-if="index === breadcrumbData.length">
          {{ getText(item.meta.title) }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else :to="{ path: item.path }">
          {{ getText(item.meta.title) }}
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const breadcrumbData = computed(() => {
      return route.matched.filter((item) => item.meta && item.meta.title);
    });

    const getText: any = getI18nText("route");
    return {
      breadcrumbData,
      getText,
    };
  },
});
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  float: left;
  line-height: var(--nav-bar-height);

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }

  .fade-enter-from,
  .fade-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .fade-leave-active {
    position: absolute;
  }
}
</style>
