import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Button from 'components/Buttons';

import {
  StyledContainer,
  InnerContainer,
  Header,
  PagePic,
  InHeadPart,
  UserDeets,
  UserEmail,
  UserName,
  LogoName
} from '../components/styles';
import COLORS from 'constants/colors';

interface Notification {
  message: string;
  dateTime: string;
  time: string;
}

const Notifications: FC = (): JSX.Element => {
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  const notifications: Notification[] = [
    { message: 'Low level of soil moisture', dateTime: '2024-06-01T07:30:00', time: '7:30 AM' },
    { message: 'Irrigation successfully done', dateTime: '2024-06-02T08:30:00', time: '8:30 AM' },
    { message: 'Tank is nearly full', dateTime: '2024-06-03T06:10:00', time: '6:10 AM' },
    { message: 'Warm Breeze in atmosphere', dateTime: '2024-06-04T10:30:00', time: '10:30 AM' },
    { message: 'Ph level is high', dateTime: '2024-06-05T06:30:00', time: '6:30 AM' },
    { message: "It's a rainy day", dateTime: '2024-06-06T04:30:00', time: '4:30 AM' },
    { message: 'Low level of soil moisture', dateTime: '2024-06-01T07:30:00', time: '7:30 AM' },
    { message: 'Irrigation successfully done', dateTime: '2024-06-02T08:30:00', time: '8:30 AM' },
    { message: 'Tank is nearly full', dateTime: '2024-06-03T06:10:00', time: '6:10 AM' },
    { message: 'Warm Breeze in atmosphere', dateTime: '2024-06-04T10:30:00', time: '10:30 AM' },
    { message: 'Ph level is high', dateTime: '2024-06-05T06:30:00', time: '6:30 AM' },
    { message: "It's a rainy day", dateTime: '2024-06-06T04:30:00', time: '4:30 AM' },
  ];

  const handleNotificationPress = (notification: Notification) => {
    setSelectedNotification(notification);
  };

  const closeModal = () => {
    setSelectedNotification(null);
  };

  const getCircleAndIcon = (message: string): { color: string, iconName: string } => {
    if (message.toLowerCase().includes('low')) {
      return { color: '#B90E0A', iconName: 'trending-down' }; 
    } else if (message.toLowerCase().includes('high')) {
      return { color: '#EC9706', iconName: 'trending-up' }; 
    } else if (message.toLowerCase().includes('success')) {
      return { color: '#028A0F', iconName: 'check-circle' }; 
    }
    return { color: '#000000', iconName: 'info' }; 
  };

  return (
    <GestureHandlerRootView>
      <StyledContainer>
        <ScrollView>
          <InnerContainer>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, marginTop: "10%"}} >
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>Notifications</Text>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.headerActions}>
                <TouchableOpacity>
                  <Text style={[styles.actionText, { fontWeight: "bold"}]}>View All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.actionText}>Archive</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.line} />

              {notifications.map((notification, index) => {
                const { color, iconName } = getCircleAndIcon(notification.message);
                return (
                  <TouchableOpacity key={index} onPress={() => handleNotificationPress(notification)}>
                    <View style={styles.notification}>
                      <View style={[styles.icon, { backgroundColor: color }]}>
                        <MaterialIcons name={iconName as "light" | "trending-down" | "trending-up" | "check-circle" | "info"} size={24} color="white" />
                      </View>

                      <Text style={styles.notificationText}>{notification.message}</Text>
                      <Text style={styles.notificationTime}>{notification.time}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Modal visible={!!selectedNotification} animationType="fade" transparent={true}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  {selectedNotification && (
                    <View>
                      <Text style={styles.modalMessage}>{selectedNotification.message}</Text>
                      <Text style={styles.modalDateTime}>{selectedNotification.dateTime} - {selectedNotification.time}</Text>
                      <Button title="Close" onPress={closeModal} />
                    </View>
                  )}
                </View>
              </View>
            </Modal>
          </InnerContainer>
        </ScrollView>
      </StyledContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: "10%"
  },
  headerActions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  actionText: {
    fontSize: 16,
    textTransform: 'capitalize',
    paddingRight: 20
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginVertical: 10,
    height: 4
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  notificationText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
  },
  notificationTime: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.25)',
    marginLeft: "6%"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalDateTime: {
    color: COLORS.grey,
    fontSize: 14,
    marginBottom: 20,
  },
});

export default Notifications;
