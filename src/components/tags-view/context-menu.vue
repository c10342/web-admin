<template>
  <ul class="context-menu-container">
    <li class="context-menu-item" @click="onRefresh">
      {{ getText("refresh") }}
    </li>
    <li class="context-menu-item" @click="onCloseRight">
      {{ getText("closeRight") }}
    </li>
    <li class="context-menu-item" @click="onCloseOther">
      {{ getText("closeOther") }}
    </li>
  </ul>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const getText = getI18nText("tagsView");
    const router = useRouter();
    const store = useStore();
    const onRefresh = () => {
      router.go(0);
    };
    const onCloseOther = () => {
      store.commit("AppModule/removeTagsView", {
        type: "other",
        index: props.index,
      });
    };
    const onCloseRight = () => {
      store.commit("AppModule/removeTagsView", {
        type: "right",
        index: props.index,
      });
    };
    return {
      getText,
      onRefresh,
      onCloseOther,
      onCloseRight,
    };
  },
});
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);
  .context-menu-item {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
