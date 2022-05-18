<template>
  <div>
<el-pagination
    layout="prev, pager, next,jumper, ->, total"
    :total="pageCount"
    @current-change="pagechange"
    background>
  </el-pagination>
  </div>
</template>

<script>
import { orderAPI } from '@/api/order.js'
export default {
  name: 'myPagination',
  data () {
    return {
      pageCount: 20
    }
  },
  methods: {
    async pagechange (val) {
      // console.log(val)
      const value = val.toString()
      const { data: res } = await orderAPI(value)
      const newpage = res.data
      this.$emit('sendpage', newpage)
    }
  }
}
</script>
