<template>
  <div class="login-container">
    <el-form label-width="120px" class="login-form">
      <h3 class="title">登录</h3>
      <el-form-item label="账号">
        <el-input placeholder="请输入账号" v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"><SvgIcon icon="eye" /> 登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const loginForm = ref({
  userName: "lisi",
  password: "123",
});
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
}
</style>
