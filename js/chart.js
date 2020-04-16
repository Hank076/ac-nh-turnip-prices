let chart_instance = null;

Chart.defaults.global.defaultFontFamily = "'Varela Round', sans-serif";

const chart_options = {
  elements: {
    line: {
      backgroundColor: "#DEF2D9",
      backgroundColor: "#DEF2D9",
      cubicInterpolationMode: "monotone",
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    intersect: false,
    mode: "index",
  },
};

function update_chart(input_data, possibilities) {
  var ctx = $("#chart");

  datasets = [
    {
      label: "輸入的價格",
      data: input_data.slice(1),
      fill: false,
    },
    {
      label: "最低價",
      data: possibilities[0].prices.slice(1).map(day => day.min),
      fill: false,
    },
    {
      label: "最高價",
      data: possibilities[0].prices.slice(1).map(day => day.max),
      fill: "-1",
    },
  ];

  if (chart_instance) {
    chart_instance.data.datasets = datasets;
    chart_instance.update();
  } else {
    chart_instance = new Chart(ctx, {
      data: {
        datasets: datasets,
        labels: ["週日", "週一上", "週一下", "週二上", "週二下", "週三上", "週三下", "週四上", "週四下", "週五上", "週五下", "週六上", "週六下"],
      },
      options: chart_options,
      type: "line",
    });
  }
}
