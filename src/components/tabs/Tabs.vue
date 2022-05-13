<template>
  <div id="Tabs">

<el-tabs type="card" v-model="editableTabsValue" editable @edit="handleTabsEdit" @tab-click="togglerouter">
  <el-tab-pane
    :key="item.fullPath"
    v-for="item in editableTabs"
    :label="item.tagName"
    :name="item.fullPath"
  >
  </el-tab-pane>
</el-tabs>

  </div>
</template>

<script>
export default {
  name: 'myTabs',
  data () {
    return {
      editableTabs: [],
      editableTabsValue: '1'
    }
  },
  created () {
    this.$nextTick(() => {
      this.getTabs()
    })
  },
  watch: {
    $route () {
      this.getTabs()
      // 使sidebar与tags保持一致的选定状态
      this.editableTabsValue = this.$router.currentRoute.fullPath
    }
  },
  methods: {
    handleTabsEdit (targetName, action) {
      if (action === 'remove') {
        const tabs = this.editableTabs
        this.editableTabs = tabs.filter(tab => tab.tagName !== targetName)
      }
    },
    getTabs () {
      const tagName = this.$route.meta
      const flag = this.editableTabs.includes(tagName)
      if (!flag) {
        this.editableTabs.push(tagName)
      }
    },
    // 点击切换
    togglerouter (target) {
      // console.log(target.name)
      // console.log(this.$router.currentRoute.fullPath)
      const theRouter = target.name
      this.$router.push(theRouter)
    }
  }
}
</script>

<style>
.el-tabs__new-tab {
  display: none;
}
</style>
