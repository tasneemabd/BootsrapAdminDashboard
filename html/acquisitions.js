import chartjs2music from "https://cdn.skypack.dev/chartjs-plugin-chart2music@latest";
import { Chart, registerables } from "https://cdn.skypack.dev/chart.js@4.2.1";

// Set up for Chart.js
Chart.register(...registerables, chartjs2music);

// Create chart
new Chart("canvas", {
  type: "bar",
  data: {
    datasets: [
      {
        hoverBorderColor: "black",
        hoverBorderWidth: "2",
        data: [
          {x: "datalabels", y: 351883},
          {x: "annotation", y: 193840},
          {x: "zoom", y: 83264},
          {x: "crosshair", y: 38503},
          {x: "style", y: 9827},
          {x: "boxplot", y: 9005},
          {x: "colorschemes", y: 8896},
          {x: "matrix", y: 8520},
          {x: "stacked100", y: 6465},
          {x: "geo", y: 6447},
          {x: "gradient", y: 6387},
          {x: "dragdata", y: 5083},
          {x: "word-cloud", y: 5018},
          {x: "sankey", y: 4700},
          {x: "streaming", y: 4668},
          {x: "treemap", y: 3716},
          {x: "deferred", y: 3420},
          {x: "autocolors", y: 2246},
          {x: "error-bars", y: 1811},
          {x: "datasource-prometheus", y: 1115},
          {x: "graph", y: 651},
          {x: "financial", y: 611},
          {x: "waterfall", y: 346},
          {x: "venn", y: 326},
          {x: "hierarchical", y: 305},
          {x: "funnel", y: 143},
          {x: "pcp", y: 94},
          {x: "rough", y: 82},
          {x: "smith", y: 22},
          {x: "regression", y: 15},
        ]
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Chart.js plugin populartiy"
      },
      legend: {
        display: false
      },
      chartjs2music: {
        cc: document.getElementById("cc")
      }
    },
    scales: {
      x: {
        title: {
          text: "Plugin",
          display: false
        }
      },
      y: {
        title: {
          text: "Downloads on NPM",
          display: true
        }
      }
    }
  }
});