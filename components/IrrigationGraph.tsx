import COLORS from 'constants/colors';
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const GridDemo: React.FC = () => {
  const data = {
    labels: ['3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'],
    datasets: [
      {
        data: [27, 27, 26, 27, 27, 26, 27, 27],
        color: () => COLORS.red,
        strokeWidth: 2,
      },
      {
        data: [0.6, 0.7, 0.9, 0.6, 0.7, 0.9, 0.7, 0.9],
        color: () => COLORS.blue,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: COLORS.white,
    backgroundGradientTo: COLORS.white,
    color: (opacity = 1) => COLORS.black,
    labelColor: () => COLORS.grey,
    strokeWidth: 2, // default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForBackgroundLines: {
      stroke: "transparent"
    },
    backgroundColor: COLORS.white, // Ensure background color is white
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Humidity / Temperature Graph</Text>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: COLORS.red }]} />
          <Text style={styles.legendText}>Temperature (°C)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: COLORS.blue }]} />
          <Text style={styles.legendText}>Humidity (%)</Text>
        </View>
      </View>
      <LineChart
        data={data}
        width={screenWidth - 22}
        height={250}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.white, // Set the background color of the container to white
    paddingBottom: 42,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendColor: {
    width: 20, // Width of the rectangle
    height: 4, // Height of the rectangle (thin)
    borderRadius: 2,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
});

export default GridDemo;
