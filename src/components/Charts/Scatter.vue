<script>
import VueChartJs from "vue-chartjs";
export default {
  extends: VueChartJs.Scatter,
  mounted() {
    this.renderChart(
      {
        datasets: [
          {
            label: "Scatter Dataset 1",
            fill: false,
            borderColor: "#1797BE",
            backgroundColor: "#1797BE",
            data: [
              {
                x: -2,
                y: 4
              },
              {
                x: -1,
                y: 1
              },
              {
                x: 0,
                y: 0
              },
              {
                x: 1,
                y: 1
              },
              {
                x: 2,
                y: 4
              }
            ]
          },
          {
            label: "Scatter Dataset 2",
            fill: false,
            borderColor: "#1797BE",
            backgroundColor: "#1797BE",
            data: [
              {
                x: -2,
                y: -4
              },
              {
                x: -1,
                y: -1
              },
              {
                x: 0,
                y: 1
              },
              {
                x: 1,
                y: -1
              },
              {
                x: 2,
                y: -4
              }
            ]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>