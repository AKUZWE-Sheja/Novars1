import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Path } from 'react-native-svg';
import COLORS from 'constants/colors';

interface WelcomeProps {
  navigation: any;
}

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.welcome}>
      <View style={{alignItems: 'flex-end'}}>
        <View style={{position: 'absolute'}}>
          <Svg
           width="271"
          height="180" 
          viewBox="0 0 281 180" 
          fill="none" 
          // xmlns="http://www.w3.org/2000/svg"
          >
            <Path d="M338.5 26.5C338.5 64.5174 318.88 102.527 289.594 131.067C260.31 159.607 221.543 178.5 183.5 178.5C164.657 178.5 143.884 170.174 123.24 156.308C102.618 142.456 82.2541 123.16 64.2639 101.435C46.2758 79.7114 30.6942 55.5991 19.6158 32.1434C8.52718 8.66616 2 -14.0477 2 -33C2 -51.8694 8.46534 -65.2001 19.2503 -74.6892C30.098 -84.2334 45.4471 -90.0055 63.3889 -93.4179C91.4497 -98.7547 125.341 -98.2459 157.264 -97.7667C166.222 -97.6322 175.025 -97.5001 183.5 -97.5001C221.73 -97.5001 260.536 -85.4725 289.751 -63.9341C318.947 -42.4101 338.5 -11.4495 338.5 26.5Z" stroke="white" strokeWidth={2}/>
          </Svg>
        </View>
        <Svg
         width="170" 
         height="225" 
         viewBox="0 0 189 225" 
         fill="none" 
        //  xmlns="http://www.w3.org/2000/svg"
         >
          <Path d="M261.496 157.907C221.316 222.712 136.21 242.675 71.4049 202.496C55.3421 192.536 41.6105 175.388 30.6925 154.105C19.7826 132.839 11.736 107.548 6.98629 81.4513C2.23685 55.3562 0.792581 28.5025 3.05522 4.12127C5.31953 -20.2779 11.2865 -42.0994 21.2751 -58.2097C31.2292 -74.2646 44.2464 -83.1508 59.1787 -86.9026C74.1634 -90.6676 91.1889 -89.2882 109.133 -84.5752C145.047 -75.1426 184.141 -52.499 216.908 -32.1833C281.712 7.99612 301.675 93.1026 261.496 157.907Z" stroke="white" strokeWidth={2}/>
        </Svg>
      </View>
      <Icon name="star" size={24} color="#fff" style={styles.star1} />
      <Icon name="star" size={14} color="#fff" style={styles.star2} />
      <Icon name="star" size={16} color="#fff" style={styles.star3} />
      <Icon name="star" size={12} color="#fff" style={styles.star4} />
      <View style={{alignItems: 'center', marginTop: -30}}>
        <Image resizeMode="contain" source={require('../assets/logo.png')} style={styles.image} />
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 30, color: COLORS.white}}>Novars</Text>
        <Text style={styles.heading}>Welcome to Novars</Text>
        <Text style={styles.description}>Reviving Agriculture with Innovation</Text>
        <TouchableOpacity style={styles.start} onPress={() => navigation.navigate("Security")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: COLORS.primary,
    width: '100%', 
    height: '100%', 
  },
  image: {
    width: 130,
    height: 140,
    borderRadius: 38.68,
    marginBottom: 14,
  },
  heading: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
  },
  description: {
    color: 'white', 
    fontSize: 16,
    top: 8,
  },
  start:{
    backgroundColor: '#F59E0B',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 76,
    top: 55,
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  star1: {
    position: 'absolute',
    left: 35,
    top: 80,
  },
  star2: {
    position: 'absolute',
    right: 40,
    top: 70,
  },
  star3: {
    position: 'absolute',
    left: 100,
    top: 135,
  },
  star4: {
    position: 'absolute',
    left: 40,
    top: 175,
  },
});

export default Welcome;