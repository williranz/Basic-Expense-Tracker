<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 10,
        setCurrentPage: 1,
      }"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        skipDiacritics: true,
        placeholder: 'Search...',
      }"
      theme="polar-bear"
      styleClass="vgt-table condensed striped"
    >
    </vue-good-table>
  </div>
</template>

<script>
// define expense table component with expense data as datasource
import expenseData from "@/data/ExpenseData";
export default {
  name: "ExpenseTable",
  data() {
    return {
      // define column properties
      columns: [
        {
          label: "Name",
          field: "name",
          type: "string",
        },
        {
          label: "Date",
          field: "date",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "dd-MM-yyyy",
        },
        {
          label: "Total (in SGD)",
          field: "total",
          type: "number",
        },
        {
          label: "Category",
          field: "category",
          type: "string",
        },
        {
          label: "Attendee",
          field: "attendee",
          type: "string",
        },
        {
          label: "Remarks",
          field: "remarks",
          type: "string",
        },
      ],
      rows: expenseData,
    };
  },
};
</script>
