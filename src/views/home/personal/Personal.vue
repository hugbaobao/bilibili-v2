<template>
  <div id="Personal">
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple left">
    <p>关于我</p>
    <div class="avatar">
      <el-avatar :size="100" :src="userPng"></el-avatar>
      <span>管理员</span>
      <div>
      </div>
    </div>
    <div class="btm">
<i class="el-icon-reading">教育</i>
<div>芜湖职业技术学院 物联网应用技术</div>
    </div>
    <div class="btm">
<i class="el-icon-user">年龄</i>
<div>26岁</div>
    </div>
  </div></el-col>
  <!-- 右侧 -->
  <el-col :span="16"><div class="grid-content bg-purple right">
    <el-tabs v-model="activeName">
    <el-tab-pane label="账户" name="first">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="Name">
    <el-input v-model="formLabelAlign.name" placeholder="admin"></el-input>
  </el-form-item>
  <el-form-item label="邮件">
    <el-input v-model="formLabelAlign.region" placeholder="1206788519@qq.com"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button :plain="true" @click="open2">更新</el-button>
  </el-form-item>
</el-form>
    </el-tab-pane>
    <el-tab-pane label="时间线" name="second">
      <el-timeline>
    <el-timeline-item color="#46a6ff">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>刘 提交于 2022/5/14 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item color="#46a6ff">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>刘 提交于 2022/5/13 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
    </el-tab-pane>
  </el-tabs>
  </div></el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'myPersonal',
  created () {
    const pic = sessionStorage.getItem('userHead')
    this.userPng = pic
  },
  data () {
    return {
      userPng: '',
      activeName: 'first',
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: ''
      }
    }
  },
  methods: {
    open2 () {
      this.$message({
        showClose: true,
        message: '更新成功！',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
/* el row部分 */
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
/* 自定大小 */
  .left {
    height: 550px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .left p {
    padding: 18px 20px;
    border-bottom: 1px solid #e6ebf5;
  }
  .right {
    height: 700px;
    padding:18px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  /* 卡片 */
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }
  .avatar span {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 700;
  }
  .avatar>div i {
    text-align: left;
  }
  .btm {
    padding:0 20px;
    margin-top: 20px;
  }
  .btm div {
    color: #777;
    font-size: 14px;
    margin-top: 10px;
    border-top: 1px solid #e6ebf5;
    padding-top: 10px;
  }
  /* 右侧 */
  .el-button {
color: #fff;
background-color: #46a6ff;
  }
</style>
