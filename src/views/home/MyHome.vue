<template>
  <div id="MyHome">

  <el-row :gutter="40">

    <el-col :span="6" :offset="6"><div class="grid-content bg-purple" @mouseenter="checkcolor($event)" @mouseleave="removecolor($event)">
<div class="myicon" ref="theicon">
  <i class="iconfont icon-wode-m"></i>
</div>
<div class="icon-r">
  <span style="color:#999">全部客户</span>
  <span>{{ customnum }}</span>
</div>
  </div></el-col>

  <el-col :span="6"><div class="grid-content bg-purple" @mouseenter="checkcolor($event)" @mouseleave="removecolor($event)">
<div class="myicon" ref="theiconq">
  <i class="iconfont icon-a-dingdanzhangdan-m"></i>
</div>
<div class="icon-r">
  <span style="color:#999">全部订单</span>
  <span>{{ ordernum }}</span>
</div>
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
  },
  data () {
    return {
      customnum: '1',
      ordernum: '2'
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
</style>
