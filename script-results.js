const chart = JSC.chart("chartDiv", {
  debug: true,
  legend: {
    position: "inside left bottom",
    template: "%value {%percentOfTotal:n1}% %icon %name",
  },
  title_position: "center",
  defaultSeries_type: "pieDonut",
  defaultPoint_label_text: "<b>%name</b>",
  title_label_text: "RESULTS <br>ciaoo",
  yAxis: { label_text: "GDP", formatString: "n" },
  series: [
    {
      name: "Countries",
      points: [
        { name: "United States", y: 5452500 },
        { name: "Canada", y: 786052 },
      ],
    },
  ],
});
