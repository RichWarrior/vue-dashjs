<script>
import VueChartJs from 'vue-chartjs'
export default {
  extends: VueChartJs.Radar,
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
            backgroundColor: "#1797BE",
            data: [40, 39, 10, 40, 39, 80, 40]
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>