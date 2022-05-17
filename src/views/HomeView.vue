<template>
  <div class="expense-chart">
    <h3>Monthly Expense Chart by Year (in SGD)</h3>
    <ExpenseChart />
  </div>
  <div class="expense-table">
    <h3>Expense Table</h3>
    <ExpenseTable />
  </div>
</template>

<script lang="ts">
// define home page containing expense chart and expense table
import { defineComponent } from "vue";
import ExpenseChart from "@/components/chart/ExpenseChart.vue";
import ExpenseTable from "@/components/table/ExpenseTable.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ExpenseChart,
    ExpenseTable,
  },
});
</script>

<style lang="less">
.expense-table h3 {
  padding-top: 40px;
}
</style>
