<template>
  <div id="Theme">
<div class="box">
  <div>
    <div class="block">
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
  </div>
  <div>
    <div class="two" :style="{'backgroundColor':color1}">
    </div>
  </div>
  <div>
    <div class="three">
      <span>换肤</span>
      <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#999">
</el-switch>
<el-button type="success" round size="mini" @click="resetcolor">初始化</el-button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import eventBus from '@/uticls/eventBus.js'
export default {
  name: 'myTheme',
  data () {
    return {
      color1: '#CDE0C9',
      value: false
    }
  },
  watch: {
    value () {
      if (this.value === true) {
        eventBus.$emit('color', this.color1)
      }
    },
    color1 () {
      this.value = false
    }
  },
  methods: {
    resetcolor () {
      this.color1 = '#CDE0C9'
      eventBus.$emit('color', this.color1)
    }
  }
}
</script>

<style scoped>
.box {
  width: 60%;
  height: 300px;
  margin: 40px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
.box>div{
  height: 200px;
  border-right: 1px solid rgb(227, 227, 227);
  flex: 1;
}
.block {
  width: 20px;
  height: 20px;
  margin: 80px auto;
}
.el-color-picker {
  margin: 0 auto;
}
.two {
  width: 100px;
  height: 200px;
  margin: 0 auto;
}
.three{
  width: 50px;
  height: 50px;
  margin: 75px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.three span {
  font-size: 14px;
  color: #333;
}
.el-button {
  margin-top: 10px;
}
</style>
