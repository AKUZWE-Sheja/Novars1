import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface WhiteWelcomeProps {
    navigation: any;
}

const WhiteWelcome: FC<WhiteWelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.welcome}>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
      <View style={{ alignItems: 'flex-end' }}>
        <View style={{ position: 'absolute' }}>
          <Svg width="207" height="173" viewBox="0 0 207 173" fill="none"
        //    xmlns="http://www.w3.org/2000/svg"
           >
            <Path d="M41.3998 -15.0477C43.3675 -17.9175 46.6855 -19.5582 50.1605 -19.3796L108.146 -16.3995C111.682 -16.2178 114.858 -14.1804 116.497 -11.0425L143.93 41.477C145.67 44.8084 145.395 48.8342 143.218 51.8982L107.918 101.588C105.937 104.377 102.669 105.959 99.2527 105.784L38.687 102.671C34.9619 102.48 31.6529 100.231 30.1036 96.8379L6.30241 44.7102C4.84495 41.5182 5.1672 37.7959 7.15153 34.9018L41.3998 -15.0477Z" fill="#1F6115" />
            <Path d="M149.186 54.8982C151.16 52.1221 154.412 50.5416 157.814 50.7044L216.078 53.4916C219.542 53.6573 222.673 55.606 224.351 58.6409L251.816 108.306C253.707 111.725 253.433 115.932 251.115 119.078L216.41 166.177C214.424 168.871 211.224 170.393 207.881 170.233L147.041 167.323C143.383 167.148 140.113 164.988 138.518 161.692L114.661 112.411C113.07 109.126 113.396 105.234 115.512 102.259L149.186 54.8982Z" fill="#1F6115" />
            <Path d="M157.569 -68.3987C159.408 -71.266 162.58 -73 165.986 -73H224.317C227.785 -73 231.005 -71.2032 232.826 -68.2519L262.633 -19.9556C264.685 -16.6308 264.613 -12.4155 262.448 -9.16303L230.032 39.5406C228.178 42.3263 225.054 44 221.708 44H160.797C157.136 44 153.766 41.9984 152.015 38.7824L125.831 -9.30148C124.085 -12.5074 124.225 -16.4098 126.196 -19.4826L157.569 -68.3987Z" fill="#1F6115" />
          </Svg>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/logo.png')} style={styles.image} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 34 }}>Novars</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 140,
    height: 150,
    marginBottom: 16,
    marginTop: 270,
  },
});

export default WhiteWelcome;