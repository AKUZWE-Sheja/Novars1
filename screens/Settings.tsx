import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SwitchToggle from 'react-native-switch-toggle';

import {
  StyledContainer,
  InnerContainer,
  Header,
  PagePic,
  InHeadPart,
  UserDeets,
  UserEmail,
  UserName,
  LogoName,
  PageTitle,
} from '../components/styles';

const Settings: FC = (): JSX.Element => {
  const [generalNotificationsEnabled, setGeneralNotificationsEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [vibrateEnabled, setVibrateEnabled] = useState(false);
  const [appUpdatesEnabled, setAppUpdatesEnabled] = useState(false);
  const [securityAlarmEnabled, setSecurityAlarmEnabled] = useState(false);
  const [irrigationEnabled, setIrrigationEnabled] = useState(false);
  const [camerasEnabled, setCamerasEnabled] = useState(false);
  const [doorsEntrancesEnabled, setDoorsEntrancesEnabled] = useState(false);
  const [newServiceAvailableEnabled, setNewServiceAvailableEnabled] = useState(false);
  const [newTipsAvailableEnabled, setNewTipsAvailableEnabled] = useState(false);

  const toggleGeneralNotifications = () => {
    setGeneralNotificationsEnabled((prev) => !prev);
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const toggleVibrate = () => {
    setVibrateEnabled((prev) => !prev);
  };

  const toggleAppUpdates = () => {
    setAppUpdatesEnabled((prev) => !prev);
  };

  const toggleSecurityAlarm = () => {
    setSecurityAlarmEnabled((prev) => !prev);
  };

  const toggleIrrigation = () => {
    setIrrigationEnabled((prev) => !prev);
  };

  const toggleCameras = () => {
    setCamerasEnabled((prev) => !prev);
  };

  const toggleDoorsEntrances = () => {
    setDoorsEntrancesEnabled((prev) => !prev);
  };

  const toggleNewServiceAvailable = () => {
    setNewServiceAvailableEnabled((prev) => !prev);
  };

  const toggleNewTipsAvailable = () => {
    setNewTipsAvailableEnabled((prev) => !prev);
  };

  return (
    <ScrollView>
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
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -14, paddingBottom: 10 }}>
          <AntDesign name="arrowleft" size={20} color="black" style={{ marginLeft: -130, paddingRight: 100 }} />
          <Text style={{fontSize: 24, fontWeight: "bold"}}>Settings</Text>
        </View>

        <View style={{width: "90%"}}>

          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: "-5%" }}>Common</Text>

          <View style={styles.switchRow}>
            <Text>General Notifications</Text>
            <SwitchToggle
              switchOn={generalNotificationsEnabled}
              onPress={toggleGeneralNotifications}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <View style={styles.switchRow}>
            <Text>Sound</Text>
            <SwitchToggle
              switchOn={soundEnabled}
              onPress={toggleSound}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <View style={styles.switchRow}>
            <Text>Vibrate</Text>
            <SwitchToggle
              switchOn={vibrateEnabled}
              onPress={toggleVibrate}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: "-5%", marginTop: "10%" }}>System & services update</Text>
          <View style={styles.switchRow}>
            <Text>App updates</Text>
            <SwitchToggle
              switchOn={appUpdatesEnabled}
              onPress={toggleAppUpdates}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>
          <View style={styles.switchRow}>
            <Text>Security Alarm</Text>
            <SwitchToggle
              switchOn={securityAlarmEnabled}
              onPress={toggleSecurityAlarm}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <View style={styles.switchRow}>
            <Text>Irrigation</Text>
            <SwitchToggle
              switchOn={irrigationEnabled}
              onPress={toggleIrrigation}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <View style={styles.switchRow}>
            <Text>Cameras</Text>
            <SwitchToggle
              switchOn={camerasEnabled}
              onPress={toggleCameras}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <View style={styles.switchRow}>
            <Text>Doors & Entrances</Text>
            <SwitchToggle
              switchOn={doorsEntrancesEnabled}
              onPress={toggleDoorsEntrances}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: "-5%", marginTop: "10%" }}>Others</Text>
          <View style={styles.switchRow}>
            <Text>New Service Available</Text>
            <SwitchToggle
              switchOn={newServiceAvailableEnabled}
              onPress={toggleNewServiceAvailable}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

          <View style={styles.switchRow}>
            <Text>New Tips Available</Text>
            <SwitchToggle
              switchOn={newTipsAvailableEnabled}
              onPress={toggleNewTipsAvailable}
              containerStyle={styles.switchContainer}
              circleStyle={styles.switchCircle}
              backgroundColorOn= "#1F6115"
              circleColorOff='#FFFFFF'
            />
          </View>

        </View>
      </InnerContainer>
    </StyledContainer>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  switchContainer: {
    width: 40,
    height: 20,
    borderRadius: 10,
    padding: 3,
  },
  switchCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  }
  
});
