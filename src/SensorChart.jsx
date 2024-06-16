// import React, { useEffect, useRef } from "react";
// import { Chart, registerables } from "chart.js";
// import "chartjs-adapter-moment"; // Import the moment adapter

// Chart.register(...registerables);

// const SensorChart = ({ data }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (!data || data.length === 0) {
//       return;
//     }

//     const ctx = chartRef.current.getContext("2d");

//     const groupedData = data.reduce((acc, curr) => {
//       if (!acc[curr.sensorname]) {
//         acc[curr.sensorname] = [];
//       }
//       acc[curr.sensorname].push({
//         date: curr.date,
//         datavalue: curr.datavalue,
//       });
//       return acc;
//     }, {});

//     const colors = [
//       "#FF6384",
//       "#36A2EB",
//       "#FFCE56",
//       "#4BC0C0",
//       "#9966FF",
//       "#FF9F40",
//     ];
//     let colorIndex = 0;

//     const datasets = Object.keys(groupedData).map((sensorname) => {
//       const dataset = {
//         label: sensorname,
//         data: groupedData[sensorname].map((entry) => ({
//           x: entry.date,
//           y: entry.datavalue,
//         })),
//         fill: false,
//         borderColor: colors[colorIndex % colors.length],
//         tension: 0.1,
//       };
//       colorIndex++;
//       return dataset;
//     });

//     const sensorChart = new Chart(ctx, {
//       type: "line",
//       data: {
//         datasets: datasets,
//       },
//       options: {
//         responsive: true,
//         scales: {
//           x: {
//             type: "time",
//             time: {
//               unit: determineTimeUnit(data),
//             },
//             title: {
//               display: true,
//               text: "Date",
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: "Value",
//             },
//           },
//         },
//       },
//     });

//     return () => {
//       sensorChart.destroy();
//     };
//   }, [data]);

//   const determineTimeUnit = (data) => {
//     const dates = data.map((d) => new Date(d.date));
//     const timeSpan = Math.max(...dates) - Math.min(...dates);

//     const oneDay = 24 * 60 * 60 * 1000;
//     if (timeSpan > oneDay * 30) {
//       return "month";
//     } else if (timeSpan > oneDay * 7) {
//       return "week";
//     } else {
//       return "day";
//     }
//   };

//   return <canvas ref={chartRef}></canvas>;
// };

// export default SensorChart;
