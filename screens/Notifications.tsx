import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

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

const Notifications: FC = (): JSX.Element => {
  return (
    <StyledContainer>
        <Header>
        <InHeadPart>
            <PagePic resizeMode="cover" source={require('../assets/logo.png')} />
            <LogoName>Novars</LogoName>
        </InHeadPart>
        <InHeadPart>
            <PagePic resizeMode="cover" source={require('../assets/profile.jpg')} />
            <UserDeets>
                <UserName>John Smith Doe</UserName>
                <UserEmail style={{ fontSize: 10 }}>Userunlknow@gmail.com</UserEmail>
            </UserDeets>
        </InHeadPart>
        </Header>
        <InnerContainer>
          <View style={styles.notificationBox}>
            <Text style={styles.header}>Notifications</Text>
            <View style={styles.headerActions}>
              <Text style={styles.viewAll}>View All</Text>
              <Text style={styles.archive}>Archive</Text>
            </View>
            <View style={styles.line} />

            {/* Notifications */}
            <View style={styles.notification}>
              <View style={styles.iconRed}></View>
              <Text style={styles.notificationText}>Low level of soil moisture</Text>
              <Text style={styles.notificationTime}>7:30 AM</Text>
            </View>

            <View style={styles.notification}>
              <View style={styles.iconBlue}></View>
              <Text style={styles.notificationText}>Irrigation successfully done</Text>
              <Text style={styles.notificationTime}>8:30 AM</Text>
            </View>

            <View style={styles.notification}>
              <View style={styles.iconOrange}></View>
              <Text style={styles.notificationText}>Tank is nearly full</Text>
              <Text style={styles.notificationTime}>6:10 AM</Text>
            </View>

            <View style={styles.notification}>
              <View style={styles.iconOrange}></View>
              <Text style={styles.notificationText}>Warm Breeze in atmosphere</Text>
              <Text style={styles.notificationTime}>10:30 AM</Text>
            </View>

            <View style={styles.notification}>
              <View style={styles.iconPurple}></View>
              <Text style={styles.notificationText}>Ph level is high</Text>
              <Text style={styles.notificationTime}>6:30 AM</Text>
            </View>

            <View style={styles.notification}>
              <View style={styles.iconPurple}></View>
              <Text style={styles.notificationText}>It’s a rainy day</Text>
              <Text style={styles.notificationTime}>4:30 AM</Text>
            </View>

            {/* Additional Notifications */}
            <View style={styles.notification}>
              <View style={styles.iconBlue}></View>
              <Text style={styles.notificationText}>Sensor battery low</Text>
              <Text style={styles.notificationTime}>11:00 AM</Text>
            </View>

        </View>
        </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  notificationBox: {
    width: 384,
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    position: 'absolute',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 10,
  },
  header: {
    fontWeight: '500',
    fontSize: 20,
    color: '#000000',
    textTransform: 'capitalize',
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  viewAll: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    textTransform: 'capitalize',
  },
  archive: {
    fontWeight: '500',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.56)',
    textTransform: 'capitalize',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginVertical: 20,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconRed: {
    width: 38,
    height: 38,
    backgroundColor: '#ED1616',
    borderRadius: 19,
  },
  iconBlue: {
    width: 38,
    height: 38,
    backgroundColor: '#16ADED',
    borderRadius: 19,
  },
  iconOrange: {
    width: 38,
    height: 38,
    backgroundColor: '#F0851D',
    borderRadius: 19,
  },
  iconPurple: {
    width: 38,
    height: 38,
    backgroundColor: '#512A57',
    borderRadius: 19,
  },
  notificationText: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 16,
    color: '#000000',
  },
  notificationTime: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.25)',
  },
});

export default Notifications;
