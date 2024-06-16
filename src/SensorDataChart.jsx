// import React, { useEffect, useState } from "react";
// import SensorChart from "./SensorChart"; // Adjust the import path as necessary

// const SensorDataChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8085/api/sensordatachart");
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Sensor Data Chart</h1>
//       <SensorChart data={data} />
//     </div>
//   );
// };

// export default SensorDataChart;
