<template>
  <div class="nav-bar">
    <Hamburger />
    <Breadcrumb />
    <div class="right-menu">
      <Guide />
      <HeaderSearch />
      <Screenfull />
      <LangSelect />
      <el-dropdown class="avatar-container" trigger="click">
        <el-avatar
          class="avatar-wrapper"
          :size="40"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="onLogout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const onLogout = () => {
      store.dispatch("UserModule/logout");
    };
    return { onLogout };
  },
});
</script>

<style lang="scss">
.nav-bar {
  height: var(--nav-bar-height);
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      cursor: pointer;
    }
  }
}
</style>
