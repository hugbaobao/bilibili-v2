<template>
  <div id="MyHome">

  <el-row :gutter="40">

<router-link to="/home/custom/customlist">
<el-col :span="6" ><div class="grid-content bg-purple" @mouseenter="checkcolor($event)" @mouseleave="removecolor($event)">
<div class="myicon">
  <i class="iconfont icon-wode-m"></i>
</div>
<div class="icon-r">
  <span style="color:#999">全部客户</span>
  <span>{{ customnum }}</span>
</div>
  </div></el-col>
</router-link>

<router-link to="/home/order/orderlist">
<el-col :span="6"><div class="grid-content bg-purple" @mouseenter="checkcolor($event)" @mouseleave="removecolor($event)">
<div class="myicon">
  <i class="iconfont icon-a-dingdanzhangdan-m"></i>
</div>
<div class="icon-r">
  <span style="color:#999">全部订单</span>
  <span>{{ ordernum }}</span>
</div>
  </div></el-col>
</router-link>

<router-link to="/home/order/orderlist">
<el-col :span="6"><div class="grid-content bg-purple" @mouseenter="checkcolor($event)" @mouseleave="removecolor($event)">
<div class="myicon">
  <i class="iconfont icon-shuju2-m"></i>
</div>
<div class="icon-r">
  <span style="color:#999">订单收入</span>
  <span>{{ income }}</span>
</div>
  </div></el-col>
</router-link>

<router-link to="/home/order/orderlist">
<el-col :span="6"><div class="grid-content bg-purple" @mouseenter="checkcolor($event)" @mouseleave="removecolor($event)">
<div class="myicon">
  <i class="iconfont icon-biaoqian-m"></i>
</div>
<div class="icon-r">
  <span style="color:#999">工作待办</span>
  <span>{{ todo }}</span>
</div>
  </div></el-col>
</router-link>

</el-row>

<!-- 空状态 -->
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
    <el-empty description=""></el-empty>
  </div></el-col>
</el-row>

  </div>
</template>

<script>
import { customAPI } from '@/api/custom.js'
import { orderAPI } from '@/api/order.js'
export default {
  name: 'TheHome',
  async created () {
    const { data: res } = await customAPI()
    this.customnum = res.data.length
    const { data: ress } = await orderAPI()
    this.ordernum = ress.data.length
    this.orderlist = ress.data
  },
  data () {
    return {
      customnum: '1',
      ordernum: '2',
      todo: 5,
      orderlist: []
    }
  },
  methods: {
    checkcolor (e) {
      e.target.children[0].style.color = '#fff'
      e.target.children[0].style.backgroundColor = 'skyblue'
    },
    removecolor (e) {
      e.target.children[0].style.color = 'skyblue'
      e.target.children[0].style.backgroundColor = '#fff'
    }
  },
  computed: {
    income () {
      /* let num = 0
      this.orderlist.forEach(item => {
        num += Number(item.money)
      }) */
      const num = this.orderlist.reduce((number, item) => {
        return number + Number(item.money)
      }, 0)
      return num
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 100px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  /* 顶部双展示框 */
  .myicon {
    width: 80px;
    height: 80px;
    margin-left: 10px;
    padding: 10px;
    border-radius: 4px;
    color: skyblue;
    background-color: #fff;
  }
   .myicon .iconfont{
   font-size: 60px;
  }
  .icon-r {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon-r span:nth-child(1) {
    margin-bottom: 5px;
  }
  /* 空状态 */
  .el-empty {
    margin: 0 auto;
  }
  a {
    color: #333;
  }
</style>
