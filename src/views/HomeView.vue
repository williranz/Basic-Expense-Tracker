<template>
  <div class="chart">
    <h3>Monthly Expense chart by Year</h3>
    <ExpenseChart />
  </div>
  <div class="table">
    <h3>Expense table by Year</h3>
    <ExpenseTable />
  </div>
</template>

<script lang="ts">
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
