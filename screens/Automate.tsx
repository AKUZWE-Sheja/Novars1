import COLORS from 'constants/colors';  // Import color constants
import React, { FC } from 'react';  // Import React and FC type
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';  // Import React Native components
import Svg, { Rect } from 'react-native-svg';  // Import Svg components for rendering SVG images

const foot = require('../assets/footer.png');  // Import footer image

interface AutomateProps {
  navigation: any;  // Define the props for the Automate component
} 

const Automate: FC<AutomateProps> = ({ navigation }) => {  // Define the Automate component

  return (
    <View style={styles.container}>
      {/* Header with SVG and SKIP button */}
      <View style={styles.header}>
        <Svg width={130} height={5} viewBox="0 0 130 5" fill="none">
          <Rect x="0.5" width="37" height="5" rx={2.5} fill="black" />
          <Rect x="46.5" width="37" height="5" rx={2.5} fill="black" />
          <Rect x="92.5" width="37" height="5" rx={2.5} fill="black" />
        </Svg>
        <TouchableOpacity onPress={() => navigation.navigate("WhiteWelcome")}>
          <Text>SKIP</Text>
        </TouchableOpacity>
      </View>

      {/* Main content with image and navigation */}
      <View style={{ alignItems: 'center', top: 45 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Notify")}>
          <Image source={require('../assets/automate.png')} style={styles.image} />
        </TouchableOpacity>  
      </View>

      {/* Footer content with background image and info text */}
      <View style={styles.content}>
        <View style={styles.imageBg}>
          <ImageBackground source={foot} resizeMode="cover" style={styles.footImg} />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Automate</Text>
          <Text style={{ color: COLORS.white, marginTop: 10 }}>
            Switch through different scenes and,{'\n'}
            quick actions for fast management of {'\n'}
            your home.
          </Text>
        </View>
      </View>
    </View>
  );
};

// Styles for the component
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
  footImg: {
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

export default Automate;  
