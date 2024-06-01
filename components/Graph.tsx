// // import React from "react";
// // import { View, StyleSheet } from "react-native";
// // import { LineChart, Grid } from "react-native-svg-charts";
// // import * as shape from "d3-shape";
// // import { Circle, G, Line, Rect, Text as SvgText } from "react-native-svg";
// // import { SensorDataType } from "@/app/irrigation/page";

// // interface GridDemoProps {
// //   sensorData: SensorDataType[];
// // }

// // const GridDemo: React.FC<GridDemoProps> = ({ sensorData }) => {
// //   const time = sensorData.map((data) => new Date(data.time));
// //   const temperatureValues = sensorData.map((data) => parseFloat(data.temperature));
// //   const moistureValues = sensorData.map((data) => parseFloat(data.moisture));

// //   const contentInset = { top: 20, bottom: 20 };

// //   const CustomGrid = ({ x, y, ticks }) => (
// //     <G>
// //       {
// //         // Horizontal grid
// //         ticks.map((tick, index) => (
// //           <Line
// //             key={index}
// //             x1="0%"
// //             x2="100%"
// //             y1={y(tick)}
// //             y2={y(tick)}
// //             stroke="rgba(0,0,0,0.2)"
// //           />
// //         ))
// //       }
// //       {
// //         // Vertical grid
// //         time.map((t, index) => (
// //           <Line
// //             key={index}
// //             y1="0%"
// //             y2="100%"
// //             x1={x(index)}
// //             x2={x(index)}
// //             stroke="rgba(0,0,0,0.2)"
// //           />
// //         ))
// //       }
// //     </G>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <LineChart
// //         style={styles.chart}
// //         data={temperatureValues}
// //         svg={{ stroke: 'green' }}
// //         contentInset={contentInset}
// //         curve={shape.curveNatural}
// //       >
// //         <CustomGrid />
// //       </LineChart>
// //       <LineChart
// //         style={StyleSheet.absoluteFill}
// //         data={moistureValues}
// //         svg={{ stroke: 'blue' }}
// //         contentInset={contentInset}
// //         curve={shape.curveNatural}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     height: 450,
// //     padding: 20,
// //   },
// //   chart: {
// //     flex: 1,
// //   },
// // });

// // export default GridDemo;

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
// import { Text } from 'react-native-svg';

// const LineChartDemo: React.FC = () => {
//     const temperatureValues = [15, 20, 25, 30, 25, 20, 15];
//     const moistureValues = [40, 35, 30, 25, 30, 35, 40];
//     const timeLabels = ["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];

//     const contentInset = { top: 20, bottom: 20 };

//     return (
//         <View style={styles.container}>
//             <View style={styles.chartContainer}>
//                 <YAxis
//                     data={temperatureValues}
//                     contentInset={contentInset}
//                     svg={{
//                         fill: 'grey',
//                         fontSize: 10,
//                     }}
//                     numberOfTicks={10}
//                     formatLabel={(value) => `${value}°C`}
//                 />
//                 <View style={{ flex: 1, marginLeft: 10 }}>
//                     <LineChart
//                         style={styles.chart}
//                         data={temperatureValues}
//                         svg={{ stroke: 'green' }}
//                         contentInset={contentInset}
//                         curve={shape.curveNatural}
//                     >
//                         <Grid />
//                     </LineChart>
//                     <LineChart
//                         style={StyleSheet.absoluteFill}
//                         data={moistureValues}
//                         svg={{ stroke: 'blue' }}
//                         contentInset={contentInset}
//                         curve={shape.curveNatural}
//                     />
//                     <XAxis
//                         style={{ marginHorizontal: -10, height: 30 }}
//                         data={timeLabels}
//                         formatLabel={(value, index) => timeLabels[index]}
//                         contentInset={{ left: 10, right: 10 }}
//                         svg={{ fontSize: 10, fill: 'black' }}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         height: 450,
//         padding: 20,
//         flexDirection: 'row',
//     },
//     chartContainer: {
//         flex: 1,
//         marginLeft: 16,
//     },
//     chart: {
//         flex: 1,
//     },
// });

// export default LineChartDemo;

