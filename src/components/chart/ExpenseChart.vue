<script>
import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";

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
            label: "Year 2021",
            borderColor: "#ff8c00",
            backgroundColor: "rgba(245, 178, 39, 0.48)",
            data: [23, 40, 45, 56, 15, 32, 45, 80, 50, 34, 11, 70],
          },
          {
            label: "Year 2020",
            borderColor: "#1589ff",
            backgroundColor: "rgba(39, 140, 245, 0.48)",
            data: [40, 20, 32, 39, 10, 40, 39, 80, 40, 20, 12, 73],
          },
          {
            label: "Year 2019",
            borderColor: "#f87979",
            backgroundColor: "rgba(255, 56, 96, 0.48)",
            data: [27, 30, 20, 67, 36, 51, 35, 23, 53, 30, 17, 67],
          },
        ],
      },
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
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
