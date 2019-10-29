<script>
import VueChartJs from 'vue-chartjs'
export default {
  extends: VueChartJs.PolarArea,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#F97979",
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>