import COLORS from 'constants/colors';
import React, { FC } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface TableRow {
  activity: string;
  date: string;
  agronomy: string;
}

const ScheduleTable: FC = () => {
  const data: TableRow[] = [
    { activity: 'Overdue', date: '01 Dec 2023', agronomy: 'James Grey' },
    { activity: 'Harvest', date: '11 Dec 2024', agronomy: 'James Grey' },
    { activity: 'Harvest', date: '11 Dec 2024', agronomy: 'James Grey' },
  ];

  const renderItem = ({ item }: { item: TableRow }) => (
    <View style={styles.tableRow}>
      <Text style={[styles.rowText, item.activity === 'Overdue' && styles.overdueRow]}>{item.activity}</Text>
      <Text style={styles.rowText}>{item.date}</Text>
      <Text style={styles.rowText}>{item.agronomy}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.scheduleTitle}>DAILY SCHEDULE</Text>
      <View style={styles.tableHeader}>
        <View style={styles.tableHeaderRow}>
          <Text style={styles.headerText}>Activities</Text>
          <Text style={styles.headerText}>Date</Text>
          <Text style={styles.headerText}>Agronomy</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    borderRadius: 16,
    padding: 10,
    marginTop: 10,
    width: "100%"
  },
  scheduleTitle: {
    fontWeight: '500',
    fontSize: 12,
    color: '#0B1C33',
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: '#F2F5FA',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DAE3F8',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#0B1C33',
    opacity: 0.7,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5, 
    borderBottomWidth: 1,
    borderBottomColor: '#DAE3F8',
  },
  rowText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#0B1C33',
    opacity: 0.7,
    width: '30%',
    textAlign: 'center',
  },
  overdueRow: {
    borderColor: COLORS.red,
    borderWidth: 1,
    borderRadius: 6,
    color: COLORS.red,
    backgroundColor: 'rgba(255, 0, 0, 0.1)', 
  },
});

export default ScheduleTable;
