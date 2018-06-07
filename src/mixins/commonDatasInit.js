import {
  setStore
} from '@/util/store'
export default {
  mounted () {
    // 获取货币类型并保存
    console.log('获取通用数据')
    this.axios.get('/commonAr/queryCurr.do').then(res => {
      if (res.data.status) {
        setStore({
          name: 'moneyTypes',
          content: res.data.showData,
          type: true
        })
      } else {
        this.$message.error(res.data.message)
      }
    })
    // 获取ar状态并保存
    this.axios.get('/commonAr/queryARStatusType.do').then(res => {
      if (res.data.status) {
        setStore({
          name: 'arStatus',
          content: res.data.showData,
          type: true
        })
      } else {
        this.$message.error(res.data.message)
      }
    })
  }
}
