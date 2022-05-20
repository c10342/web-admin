<template>
  <div class="login-container">
    <el-form label-width="120px" class="login-form">
      <h3 class="title">
        {{ getText("title") }}
        <LangSelect />
      </h3>
      <el-form-item :label="getText('username')">
        <el-input
          :placeholder="getText('usernameRule')"
          v-model="loginForm.userName"
        />
      </el-form-item>
      <el-form-item :label="getText('password')">
        <el-input
          :placeholder="getText('passwordRule')"
          v-model="loginForm.password"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onLoginClick">
          {{ getText("loginBtn") }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { getI18nText } from "@/utils/i18n";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const loginForm = ref({
  userName: "super-admin",
  password: "123456",
});

const loading = ref(false);
const store = useStore();
const router = useRouter();
const getText = getI18nText("login");
const onLoginClick = () => {
  loading.value = true;
  store
    .dispatch("UserModule/login", {
      userName: loginForm.value.userName,
      password: loginForm.value.password,
    })
    .then(() => {
      // todo
    })
    .catch(() => {
      // todo
    })
    .finally(() => {
      router.push("/");
      loading.value = false;
    });
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  min-height: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  color: #fff;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: 700;
    }
    :deep(.el-form-item__label) {
      color: #fff;
    }
  }

  :deep(.lang-select-container) {
    margin-right: 0;
    background-color: #fff;
  }
}
</style>
