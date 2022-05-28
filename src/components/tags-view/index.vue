<template>
  <div class="tags-view-container" id="tags-view">
    <router-link
      v-for="(tagsView, index) in tagsViewList"
      :key="tagsView.path"
      :to="tagsView.fullPath"
      class="tags-view-item"
      :class="{ active: isActive(tagsView.path) }"
      @contextmenu.prevent="onContextMenu($event, index)"
    >
      {{ getText(tagsView.title) }}
      <el-icon
        v-if="!isActive(tagsView.path)"
        class="close-tags-view"
        @click.prevent.stop="onClose(index)"
      >
        <Close />
      </el-icon>
    </router-link>
    <ContextMenu v-show="isShow" :style="style" :index="selectIndex" />
  </div>
</template>

<script lang="ts">
import { useClickOutside } from "@/hooks/use-click-outside";
import { getI18nText } from "@/utils/i18n";
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ContextMenu from "./context-menu.vue";

export default defineComponent({
  components: { ContextMenu },
  setup() {
    const route = useRoute();
    const store = useStore();
    const getText = getI18nText("route");
    const tagsViewList = computed(() => {
      return store.getters.tagsViewList;
    });
    const onClose = (index: number) => {
      store.commit("AppModule/removeTagsView", {
        type: "index",
        index,
      });
    };
    const isActive = (path: string) => {
      return path === route.path;
    };
    const style = ref<{ left: string | number; top: string | number }>({
      left: 0,
      top: 0,
    });
    const isShow = ref(false);
    const selectIndex = ref(0);
    const onContextMenu = (event: MouseEvent, index: number) => {
      const { x, y } = event;
      style.value.left = `${x}px`;
      style.value.top = `${y}px`;
      isShow.value = true;
      selectIndex.value = index;
    };
    useClickOutside(isShow, () => {
      console.log(11);

      isShow.value = false;
    });
    return {
      tagsViewList,
      onClose,
      isActive,
      getText,
      onContextMenu,
      isShow,
      style,
      selectIndex,
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
