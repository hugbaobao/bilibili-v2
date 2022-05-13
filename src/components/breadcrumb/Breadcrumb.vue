<template>
  <div id="Temp">
<el-breadcrumb separator="/">

  <el-breadcrumb-item v-for="(item,index) in routerList" :key="item.path">
    <!-- 如果是最后一项 -->
    <span v-if="index==routerList.length-1">{{ item.meta.title}}</span>
    <!-- 如果不是最后一项 -->
    <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}></a>
  </el-breadcrumb-item>
</el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'myTemp',
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      routerList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      // console.log(this.$route)
      // 只显示有title的路由记录,使用了meta，定义部分路由的时候要配置 meta 字段
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      // 将首页插入到面包屑中
      const first = matched[0]
      if (!this.isindex(first)) {
      // 将首页添加进来连接成一个新数组
        matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
      }
      // 把路由信息加入到数组中
      this.routerList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isindex (route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim() === 'home'
    },
    // 点击跳转
    handleLink (item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style></style>
