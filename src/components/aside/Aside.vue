<template>
  <div id="Aside">
<el-menu class="el-menu-vertical-demo" text-color="#797E82" active-text-color="#68B2A0" @open="handleOpen" @close="handleClose" :collapse="Collapse" :default-active="sidebaiValue" :router="true">
 <!-- 首页 -->
  <el-menu-item index="/home/home">
    <i class="el-icon-menu"></i>
    <span slot="title">首页</span>
  </el-menu-item>
 <!-- 客户 -->
  <el-submenu index="/home/custom">
    <template slot="title">
      <i class="el-icon-s-check"></i>
      <span slot="title">客户</span>
    </template>
    <el-menu-item-group>
      <span slot="title">我的客户</span>
      <el-menu-item index="/home/custom">客户列表</el-menu-item>
      <el-menu-item index="/home/custom">添加客户</el-menu-item>
      <el-menu-item index="/home/custom">客户管理</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <!-- 订单 -->
    <el-submenu index="/home/order">
    <template slot="title">
      <i class="el-icon-printer"></i>
      <span slot="title">订单</span>
    </template>
    <el-menu-item-group>
      <span slot="title">我的订单</span>
      <el-menu-item index="/home/order">订单列表</el-menu-item>
      <el-menu-item index="/home/order">添加订单</el-menu-item>
      <el-menu-item index="/home/order">退款处理</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <!-- 设置 -->
    <el-menu-item index="/home/power">
    <i class="el-icon-setting"></i>
    <span slot="title">权限</span>
  </el-menu-item>
  <!-- 主题 -->
    <el-menu-item index="/home/theme">
    <i class="el-icon-brush"></i>
    <span slot="title">主题</span>
  </el-menu-item>
  <!-- 个人中心 -->
  <el-menu-item index="/home/personal">
    <i class="el-icon-user"></i>
    <span slot="title">个人中心</span>
  </el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'myAside',
  data () {
    return {
      isCollapse: false,
      Collapse: false,
      sidebaiValue: ''
    }
  },
  props: ['CollapseIs'],
  watch: {
    CollapseIs () {
      this.Collapse = this.CollapseIs
    },
    $route () {
      // 使sidebar与tags保持一致的选定状态
      this.sidebaiValue = this.$router.currentRoute.fullPath
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu {
  background-color: #CDE0C9;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
a {
    text-decoration: none;
  }
</style>
