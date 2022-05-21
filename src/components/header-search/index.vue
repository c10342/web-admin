<template>
  <div class="header-search" :class="{ show: isShow }">
    <div class="icon-wrapper" @click.stop="onClick">
      <SvgIcon icon="search" />
    </div>
    <el-select
      size="small"
      class="header-search-select"
      v-model="search"
      placeholder="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      @change="onChange"
      ref="selectRef"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join('>')"
        :value="option.item.path"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { filterRoutes } from "@/utils/route";
import { defineComponent, onBeforeUnmount, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { FueSearchItem, generateRoutes } from "./fuse-data";
import Fuse from "fuse.js";
import { ElSelect } from "element-plus";
import { watchLanguageSwitch } from "@/utils/i18n";

export default defineComponent({
  setup() {
    const router = useRouter();
    const search = ref("");
    const selectRef = ref<typeof ElSelect | null>(null);
    const searchOptions = ref<{ item: FueSearchItem }[]>([]);
    const isShow = ref(false);
    const initFuse = () => {
      const searchPool = generateRoutes(filterRoutes(router.getRoutes()));
      return new Fuse(searchPool, {
        // 是否按优先级进行排序
        shouldSort: true,
        // 陪陪长度超过这个值才会被认为是匹配
        minMatchCharLength: 1,
        // 将被搜索的键列表，这支持嵌套路由、加权搜索、在字符串和对象数组中搜索
        // name搜索的键
        // weight对应的权重
        keys: [
          {
            name: "title",
            weight: 0.7,
          },
          { name: "path", weight: 0.3 },
        ],
      });
    };
    let fuse = initFuse();

    const querySearch = (query: string) => {
      if (query) {
        searchOptions.value = fuse.search(query) as any;
      } else {
        searchOptions.value = [];
      }
    };
    const onChange = (path: string) => {
      router.push(path);
      onClose();
    };
    const onClick = () => {
      isShow.value = !isShow.value;
      if (isShow.value) {
        selectRef.value?.focus();
      }
    };
    const onClose = () => {
      isShow.value = false;
      searchOptions.value = [];
      search.value = "";
    };
    watch(isShow, () => {
      // 点击body关闭搜索
      if (isShow.value) {
        document.addEventListener("click", onClose);
      } else {
        document.removeEventListener("click", onClose);
      }
    });
    watchLanguageSwitch(() => {
      fuse = initFuse();
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", onClose);
    });
    return {
      search,
      searchOptions,
      querySearch,
      onChange,
      isShow,
      onClick,
      selectRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-search {
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &.show {
    .header-search-select {
      width: 200px;
      overflow: unset;
    }
    .icon-wrapper {
      margin-right: 10px;
    }
  }
  .icon-wrapper {
    cursor: pointer;
  }
  .header-search-select {
    width: 0;
    transition: width 0.5s;
    overflow: hidden;
  }
}
</style>
