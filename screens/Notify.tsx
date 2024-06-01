import COLORS from 'constants/colors';
import React, { FC, useRef } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, PanResponder } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import 'react-native-gesture-handler';


const foot = require('../assets/footer.png');

interface NotifyProps {
  navigation: any;
} 
const Notify: FC<NotifyProps> = ({ navigation }) => {

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Svg width={130} height={5} viewBox="0 0 130 5" fill="none"
         >
          <Rect x="0.5" width="37" height="5" rx={2.5} fill="black" />
          <Rect x="46.5" width="37" height="5" rx={2.5} fill="black" />
          <Rect x="92.5" width="37" height="5" rx={2.5} fill="black" />
        </Svg>
        <TouchableOpacity onPress={() => navigation.navigate("WhiteWelcome")}>
        <Text>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', top: 45}}>
      <TouchableOpacity onPress={() => navigation.navigate("WhiteWelcome")}>
        <Image source={require('../assets/notify.png')} style={styles.image} />
      </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.imageBg}>
          <ImageBackground source={foot} resizeMode="cover" style={styles.footImg}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Get Notified</Text>
          <Text style={{ color: COLORS.white, marginTop: 10}}>
            You can get all info about your home,{'\n'}
            family with your devices on the app {'\n'}
            and get notifications for any activity or {'\n'}
            alerts.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
    height: '100%', 
  },
  image: {
    marginTop: 50,
    maxHeight: 280,
    maxWidth: 280,
  },
  imageBg: {
    width: 360,
    height: 360,
    marginTop: 180
  },
  footImg:{
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  info: {
    marginLeft: 20,
    position: 'absolute',
    display: 'flex',  
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30
  },
});

export default Notify;