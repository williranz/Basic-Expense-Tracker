<script>
import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";
import { chartData2021, chartData2020, chartData2019 } from "./ChartData";

// define expense chart component with chart data year 2019, 2020, 2021 as datasource
export default defineComponent({
  name: "ExpenseChart",
  extends: Line,
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "2021",
            borderColor: "#ff8c00",
            backgroundColor: "rgba(245, 178, 39, 0.48)",
            data: chartData2021,
          },
          {
            label: "2020",
            borderColor: "#1589ff",
            backgroundColor: "rgba(39, 140, 245, 0.48)",
            data: chartData2020,
          },
          {
            label: "2019",
            borderColor: "#f87979",
            backgroundColor: "rgba(255, 56, 96, 0.48)",
            data: chartData2019,
          },
        ],
      },
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                // add $ sign in front of value
                callback: function (value) {
                  return "$" + value;
                },
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
});
</script>
