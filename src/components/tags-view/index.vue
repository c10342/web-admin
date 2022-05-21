<template>
  <div class="tags-view-container">
    <router-link
      v-for="tagsView in tagsViewList"
      :key="tagsView.path"
      :to="tagsView.fullPath"
      class="tags-view-item"
      :class="{ active: isActive(tagsView.path) }"
    >
      {{ getText(tagsView.title) }}
      <el-icon
        v-if="!isActive(tagsView.path)"
        class="close-tags-view"
        @click.prevent.stop="onClose"
      >
        <Close />
      </el-icon>
    </router-link>
  </div>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();
    const getText = getI18nText("route");
    const tagsViewList = computed(() => {
      return store.getters.tagsViewList;
    });
    const onClose = () => {
      // todo
    };
    const isActive = (path: string) => {
      return path === route.path;
    };

    return {
      tagsViewList,
      onClose,
      isActive,
      getText,
    };
  },
});
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

  .tags-view-item {
    // display: inline-block;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    text-decoration: none;
    &:first-of-type {
      margin-left: 15px;
    }

    .close-tags-view {
      border-radius: 50%;
      padding: 1px;
      margin-left: 2px;
      &:hover {
        background-color: #ccc;
        color: #fff;
      }
    }

    &.active {
      color: #fff;
      background-color: rgb(48, 65, 86);
      border-color: rgb(48, 65, 86);
      &::before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }

    .el-icon-close {
      width: 16px;
      height: 16px;
      line-height: 10px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
    }
  }
}
</style>
