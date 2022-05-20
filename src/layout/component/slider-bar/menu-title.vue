<template>
  <i
    class="menu-title-icon"
    v-if="icon.includes('el-icon')"
    :class="[icon, sliderBarOpened ? 'is-closed' : 'is-opened']"
  ></i>
  <div
    v-else
    :class="`${sliderBarOpened ? 'is-closed' : 'is-opened'} menu-title-icon`"
  >
    <SvgIcon :icon="icon" />
  </div>

  <span>{{ getText(title) }}</span>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const sliderBarOpened = computed(() => {
      return store.getters.sliderBarOpened;
    });
    const getText = getI18nText("route");
    return { sliderBarOpened, getText };
  },
});
</script>

<style lang="scss">
.menu-title-icon {
  margin-right: 16px;
  display: inline-block;
  &.is-closed {
    margin-right: 0;
  }
}
</style>
