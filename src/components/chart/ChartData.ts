// define chart data with expense data as data source
import expenses from "@/data/ExpenseData";

// assuming this app only cater for year 2019, 2020, and 2021
const chartData2021: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const chartData2020: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const chartData2019: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

expenses.forEach((expense) => {
  const expenseDate = new Date(expense.date);
  const expenseYear = expenseDate.getFullYear();
  const expenseMonth = expenseDate.getMonth();

  // iterate for every month (January to December)
  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    if (expenseMonth == monthIndex) {
      // sum up total expense based on current month iteration depending on expense year
      switch (expenseYear) {
        case 2019:
          chartData2019[monthIndex] += expense.total;
          break;

        case 2020:
          chartData2020[monthIndex] += expense.total;
          break;

        case 2021:
          chartData2021[monthIndex] += expense.total;
          break;

        default:
          console.log("invalid year : " + expenseYear);
      }
    }
  }
});

// export all years chart data
export { chartData2021, chartData2020, chartData2019 };
