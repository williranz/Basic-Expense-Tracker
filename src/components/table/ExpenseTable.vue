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
export default {
  name: "ExpenseTable",
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Date",
          field: "date",
          type: "date",
          dateInputFormat: "dd-MM-yyyy",
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
        },
        {
          label: "Attendee",
          field: "attendee",
        },
        {
          label: "Remarks",
          field: "remarks",
        },
      ],
      rows: [
        {
          id: 1,
          name: "New year dining",
          date: "01-01-2019",
          total: 150,
          category: "staff events",
          attendee: "all employee",
          remarks: "New year 2019 dining event",
        },
        {
          id: 2,
          name: "Team Building",
          date: "02-03-2019",
          total: 50,
          category: "staff events",
          attendee: "Alpha45 team",
          remarks: "Alpha45 team building event",
        },
        {
          id: 3,
          name: "Bali Field Trip",
          date: "03-04-2019",
          total: 500,
          category: "leisure events",
          attendee: "all employee",
          remarks: "Bali trip for all staff",
        },
        {
          id: 4,
          name: "Dining with CEO",
          date: "04-05-2020",
          total: 200,
          category: "staff events",
          attendee: "Management team",
          remarks: "Welcoming our new CEO",
        },
        {
          id: 5,
          name: "Microsoft Seminar",
          date: "05-06-2020",
          total: 250,
          category: "staff training",
          attendee: "all employee",
          remarks: "starting migration to Azure cloud",
        },
        {
          id: 6,
          name: "Medical Trip",
          date: "06-07-2020",
          total: 1200,
          category: "medical",
          attendee: "Ms. Alexa",
          remarks: "Medical expenses for Ms. Alexa",
        },
        {
          id: 7,
          name: "Malaysia Business Trip",
          date: "07-08-2021",
          total: 600,
          category: "staff events",
          attendee: "Marketing team",
          remarks: "Promote new product releases to Malaysia market",
        },
        {
          id: 8,
          name: "Employee Leadership Training",
          date: "08-09-2021",
          total: 400,
          category: "staff training",
          attendee: "new employees",
          remarks: "Leadership training for new joiners",
        },
        {
          id: 9,
          name: "New Laptops Purchase",
          date: "09-10-2021",
          total: 5200,
          category: "inventory",
          attendee: "IT Staff",
          remarks: "New laptops purchase",
        },
        {
          id: 10,
          name: "Dental Scaling",
          date: "10-11-2021",
          total: 60,
          category: "staff benefits",
          attendee: "Mr. John Doe",
          remarks: "Dental scaling for Mr.John Doe",
        },
        {
          id: 11,
          name: "Covid 19 vaccination",
          date: "11-12-2021",
          total: 30,
          category: "staff benefits",
          attendee: "Mr. Alfonso Pareira",
          remarks: "Covid 19 vaccination second dose for Mr. Alfonso Pareira",
        },
      ],
    };
  },
};
</script>
