<template>
  <el-table :data="roleList" border style="width: 100%">
    <el-table-column type="index" :label="getText('index')" width="100px" />
    <el-table-column prop="title" :label="getText('name')" />
    <el-table-column prop="describe" :label="getText('desc')" />
    <el-table-column :label="getText('action')">
      <el-button type="primary" size="small">
        {{ getText("assignPermissions") }}
      </el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { getI18nText } from "@/utils/i18n";
import { defineComponent } from "vue";
import roleList from "@/mock/role-list";

export default defineComponent({
  setup() {
    const getText = getI18nText("role");
    return {
      roleList,
      getText,
    };
  },
});
</script>
