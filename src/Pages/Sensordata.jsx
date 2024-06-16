// import React, { useEffect, useState } from "react";
// import api from "./api"; // Import the API utility

// const SensorData = () => {
//   const [data, setData] = useState([]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get("/sensordata");
//         setData(response.data);
//       } catch (error) {
//         if (error.response && error.response.data) {
//           setMessage("Error fetching data: " + error.response.data);
//         } else {
//           setMessage("Error fetching data: " + error.message);
//         }
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Sensor Data</h2>
//       {message && <p>{message}</p>}
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.datavalue}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SensorData;
