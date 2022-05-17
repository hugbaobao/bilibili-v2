<template>
  <div id="CustomList">
    <!-- 一行 -->
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
    <i class="el-icon-search"> 筛选</i>
    <div class="form">
      <el-form :inline="true" ref="form" :model="form" label-width="105px">
  <el-form-item label="客户姓名：">
    <el-input v-model.trim="form.name"></el-input>
  </el-form-item>
  <el-form-item label="手机号码：">
    <el-input v-model.trim="form.number"></el-input>
  </el-form-item>
  <el-form-item label="活动区域：">
    <el-select v-model="form.region" placeholder="请选择客户状态">
      <el-option label="已成交" :value="true"></el-option>
      <el-option label="未成交" :value="false"></el-option>
    </el-select>
  </el-form-item>
  <div class="sub">
    <el-form-item>
    <el-button type="primary" @click="onSubmit">立即筛选</el-button>
    <el-button @click="reset">重置</el-button>
  </el-form-item>
  </div>
</el-form>
    </div>
  </div></el-col>
</el-row>
<!-- 二行 -->
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
    <i class="el-icon-s-order"> 客户列表</i>
  </div></el-col>
</el-row>
<!-- 三行 -->
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
<ul>
  <li class="tbhead">
    <span>编号</span>
    <span>客户姓名</span>
    <span>联系号码</span>
    <span>客户状态</span>
    <span>操作</span>
  </li>
  <li v-for="(item) in custominfo" :key="item.id" class="tbbody">
    <span>{{item.id}}</span>
    <span>{{item.name}}</span>
    <span>{{item.phone}}</span>
    <span>
      <el-switch
  v-model="item.status"
  active-color="#13ce66"
  inactive-color="#F0F2F5"
  active-text="已成交"
  inactive-text="未成交"
  :name="item.id"
  disabled>
</el-switch>
    </span>
    <span>
      <el-button type="danger" size="small" plain
    @click="open1(item.id)">删除</el-button>
    </span></li>
</ul>

  </div></el-col>
</el-row>
  </div>
</template>

<script>
import { customAPI } from '@/api/custom.js'
export default {
  name: 'CustomList',
  async created () {
    const { data: res } = await customAPI()
    this.custominfo = res.data
    this.$store.commit('savecustom', this.custominfo)
  },
  data () {
    return {
      form: {
        name: '',
        region: '',
        number: ''
      },
      custominfo: []
    }
  },

  methods: {
    onSubmit () {
      this.custominfo = this.$store.state.customs
      if (this.form.name !== '') {
        this.custominfo = this.custominfo.filter(item => item.name === this.form.name)
      }
      if (this.form.number !== '') {
        this.custominfo = this.custominfo.filter(item => item.phone === this.form.number)
      }
      if (this.form.region !== '') {
        this.custominfo = this.custominfo.filter(item => item.status === this.form.region)
      }
    },
    reset () {
      this.form.name = ''
      this.form.region = ''
      this.form.number = ''
      this.custominfo = this.$store.state.customs
    },
    open1 (e) {
      this.custominfo = this.custominfo.filter(item => item.id !== e)
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
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
    background: #fff;
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
/* 表单 */
.sub {
  margin-left: 20px;
}
  /* 二行 */
  .el-icon-search,.el-icon-s-order {
    line-height: 100%;
    margin: 20px;
  }
  /* 列表 */
  ul {
    padding: 0;
  }
  ul li {
    display: flex;
    border-bottom: 1px solid #ededed;
  }
  ul li span {
    display: inline-block;
    border-right: 1px solid #ededed;
  }
  ul li span:nth-child(1) {
    width: 50px;
  }
  ul li span:nth-child(n+2) {
    flex: 1;
  }
.tbhead span {
  height: 50px;
  line-height: 50px;
  text-align: center;
   color: #909399;
}
.tbbody {
  height: 45px;
}
.tbbody span {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
