<template>
  <el-table
    :data="permissionList"
    style="width: 100%"
    row-key="id"
    border
    default-expand-all
  >
    <el-table-column prop="permissionName" :label="getText('name')" />
    <el-table-column prop="permissionMark" :label="getText('mark')" />
    <el-table-column prop="permissionDesc" :label="getText('desc')" />
  </el-table>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { defineComponent } from "vue";
import permissionList from "@/mock/permission-list";

export default defineComponent({
  setup() {
    const getText = getI18nText("permission");
    return {
      permissionList,
      getText,
    };
  },
});
</script>
