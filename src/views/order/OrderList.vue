<template>
  <div id="orderList">
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
    <i class="el-icon-search"> 筛选</i>
    <div class="form">
      <el-form :inline="true" ref="form" :model="form" label-width="105px">
  <el-form-item label="订单编号：">
    <el-input v-model.trim="form.number"></el-input>
  </el-form-item>
  <el-form-item label="订单金额：">
    <el-input v-model.trim="form.money"></el-input>
  </el-form-item>
  <el-form-item label="订单类型：">
    <el-select v-model="form.region" placeholder="请选择订单类型">
      <el-option label="注册" :value="'注册'"></el-option>
      <el-option label="注销" :value="'注销'"></el-option>
      <el-option label="财务" :value="'财务'"></el-option>
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
    <i class="el-icon-s-order"> 订单列表</i>
  </div></el-col>
</el-row>
<!-- 三行 -->
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
<ul>
  <li class="row">
    <span style="width:100px">完结</span>
    <label for="">
      <span>订单编号</span><span>订单类型</span><span>订单金额</span><span>操作</span>
    </label>
  </li>
  <li v-for="item in orderlist" :key="item.orderId" class="row">
    <span id="checkbox">
      <i class="el-icon-success" style="color:green" v-if="item.done"></i>
      <i class="el-icon-circle-check" v-else></i>
    </span>
    <label for="checkbox">
      <span>{{ item.orderId }}</span>
      <span>{{ item.business }}</span>
      <span>{{ item.money }}</span>
      <span><el-button type="info" plain size="small">详情</el-button></span>
    </label>
  </li>
</ul>
  </div></el-col>
</el-row>
<div class="pagination">
    <Pagination @sendpage="savepage"></Pagination>
  </div>
  </div>
</template>

<script>
import { orderAPI } from '@/api/order.js'

import Pagination from '@/components/pagination/Pagination.vue'
export default {
  name: 'myorderList',
  async created () {
    /* 这里查询直接查询的第一页，
    保存也就只有10条，
    筛选是从保存的数据里筛选，
    导致筛选出来的数据不包含其他页的数据，
    可以全部查询后保存之后再渲染 */
    const { data: res } = await orderAPI(1)
    this.$store.commit('saveorders', res.data)
    this.orderlist = res.data
    // console.log(this.orderlist)   .slice(0, 10)
  },
  data () {
    return {
      form: {
        money: '',
        region: '',
        number: ''
      },
      orderlist: [],
      toggle: true
    }
  },
  methods: {
    onSubmit () {
      this.orderlist = this.$store.state.orders
      if (this.form.money !== '') {
        this.orderlist = this.orderlist.filter(item => item.money === this.form.money)
      }
      if (this.form.number !== '') {
        this.orderlist = this.orderlist.filter(item => item.orderId === this.form.number)
      }
      if (this.form.region !== '') {
        this.orderlist = this.orderlist.filter(item => item.business === this.form.region)
      }
    },
    reset () {
      this.form.money = ''
      this.form.region = ''
      this.form.number = ''
      this.orderlist = this.$store.state.orders
    },
    savepage (val) {
      // console.log(val)
      this.orderlist = val
    }
  },
  components: {
    Pagination
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
  li {
    padding: 0 50px;
    height: 50px;
    border-bottom: 1px solid #ededed;
  }
  .row {
    display:flex;
    align-items: center;
justify-content: space-around;
  }
  .row label{
flex: 1;
display:flex;
justify-content: space-around;
align-items: center;
  }
  .row label span {
  width: 100px;
  text-align: center;
  }
  #checkbox {
    width: 100px;
  }
  #checkbox i{
font-size: 30px;
  }
</style>
