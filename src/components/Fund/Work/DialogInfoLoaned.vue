<template>
<section id="print">
  <el-dialog custom-class="dia-class" :visible.sync="visibleP" :before-close="handleClose" center="">
    <header slot="title">
      <span class="title">
        {{getTitle}}
      </span>
    </header>
    <section>
      <ul>
        <li class="w-50">
          <span>付款单位: <em>{{this.detailsP.companyName}}</em></span>
        </li>
        <li class="w-50">
          <span>贴现客户: <em>{{this.detailsP.custFromName}}</em></span>
        </li>
      </ul>
      <!-- <ul>
        <li class="w-50">
          <span>付款银行名称: <em>{{this.detailsP.payerBankName}}</em></span>
        </li>
        <li class="w-50">
          <span>付款银款账号: <em>{{this.detailsP.payerBankAccount}}</em></span>
        </li>
      </ul> -->
      <ul>
        <li class="w-50">
          <span>贴现客户收款银行: <em>{{this.detailsP.bankName}}</em></span>
        </li>
        <li class="w-50">
          <span>贴现客户收款银行: <em>{{this.detailsP.bankAccount}}</em></span>
        </li>
      </ul>
      <ul>
        <li class="w-50">
          <span>贴现金额: <em>{{this.detailsP.billBookAmt | regexNum}}</em></span>
        </li>
        <li class="w-50">
          <span>币别: <em>{{this.detailsP.currencyDesc}}</em></span>
        </li>
      </ul>
      <ul>
        <li class="w-50">
         <span>年利率: <em>{{this.detailsP.interestRate |addPercent}}</em></span>
        </li>
        <li class="w-50">
         <span>逾期利率: <em>{{this.detailsP.overdueRate |addPercent}}</em></span>
        </li>
      </ul>
      <ul>
        <li class="w-50">
          <span>实际放款金额: <em>{{this.detailsP.actualDiscountAmt | regexNum}}</em></span>
        </li>
        <li class="w-50">
         <span>手续费: <em>{{this.detailsP.overdueRate |addPercent}}</em></span>
        </li>
      </ul>
      <ul class="height-auto">
        <span>对应发票号:
          <div class="a-link-group inline-block">
            <label v-for="item in detailsP.invoiceCustomList" :key="item.invoiceNo">{{item.invoiceNo}}</label>
          </div>
        </span>
      </ul>
      <ul class="height-auto">
          <span>合同:
          <div class="a-link-group inline-block">
            <a v-for="item in detailsP.contractList" :key="item.contractId" :href="item.contractUrl" target="_blank" @click="constractHandle(item.contractUrl)">{{item.contractName}}</a>
            <!-- <a v-for="item in detailsP.contractList" :key="item.contractId" href="http://" @click.prevent="constractHandle(item.contractId)">{{item.contractName}}</a> -->
          </div>
        </span>
      </ul>
    </section>
    <footer class="no-print"  slot="footer" :style="'clear:both'">
      <el-button type="primary" @click="handleClose">确认</el-button>
      <el-button type="primary" @click="print('print')">打印</el-button>
    </footer>
  </el-dialog>
  </section>
</template>
<style scoped lang="scss">
@import "@/assets/css/_dialog.scss";
</style>

<script>
import DialogClose from '@/mixins/suplier/Ar/DialogClose'
import common from '@/mixins/common' //
export default {
  props: ['visibleP', 'detailsP'],
  mixins: [DialogClose, common],
  data () {
    return {
      radio2: 3
    }
  },
  computed: {
    getTitle () {
      return this.detailsP.masterChainId + '详情'
    }
  },
  methods: {

  }
}

</script>
