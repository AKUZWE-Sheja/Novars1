import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Switch } from 'react-native';
import COLORS from '../constants/colors';
import { FontAwesome6 } from '@expo/vector-icons';
import axios from 'axios';

import {
    StyledContainer,
    InnerContainer,
    LogoName,
    Header,
    InHeadPart,
    UserName,
    UserEmail,
    PagePic,
    UserDeets,
    SalutePic,
    Visuary,
    Colors
} from '../components/styles';

import GridDemo from 'components/IrrigationGraph'; 
import useGreeting from 'hooks/useGreeting'; 

const Irrigate: FC = (): JSX.Element => {
   
    const [isSystemOn, setIsSystemOn] = useState(false);
    const {currentTime, greeting} = useGreeting(); // Destructuring hook values
    const [temperature, setTemperature] = useState<number | null>(null);

    const toggleSystem = () => {
        setIsSystemOn((prev) => !prev);
    };

  // using openmeteo -it is non-commercial but does the work for now
  useEffect(() => {
    const fetchWeather = async () => {
      const url = "https://api.open-meteo.com/v1/forecast";
      const params = {
        latitude: -1.94, 
        longitude: 29.87,  
        hourly: "temperature_2m",
      };

      try {
        const response = await axios.get(url, { params });
        console.log("Weather API Response:", response.data);

        const hourly = response.data.hourly;
        if (hourly && hourly.temperature_2m) {
          const temperatureData = hourly.temperature_2m[0];  // Assuming you want the first temperature value
          setTemperature(temperatureData);  
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []); 

    return (
        <ScrollView>
            <StyledContainer>
                {/* Header section */}
                <Header>
                    {/* Left part of the header */}
                    <InHeadPart>
                        <PagePic resizeMode="cover" source={require('../assets/logo.png')} />
                        <LogoName>Novars</LogoName>
                    </InHeadPart>
                    {/* Right part of the header */}
                    <InHeadPart>
                        <PagePic resizeMode="cover" source={require('../assets/profile.jpg')} />
                        <UserDeets>
                            <UserName>John Smith Doe</UserName>
                            <UserEmail style={{ fontSize: 10 }}>edwige@gmail.com</UserEmail>
                        </UserDeets>
                    </InHeadPart>
                </Header>

                {/* Main content container */}
                <InnerContainer>
                    {/* Greeting and weather section */}
                    <View style={styles.greetingContainer}>
                        <View>
                            <Text style={styles.greetingText}>{greeting}</Text>
                            <View style={styles.temperatureContainer}>
                                <SalutePic resizeMode="cover" source={require('../assets/morning.png')} />
                                <View style={styles.temperatureTextContainer}>
                                    <Text style={styles.temperatureText}>
                                        { temperature != null ? temperature : '...' }
                                        <Text style={styles.degreeText}>°C</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* Location and system status section */}
                        <View style={styles.locationContainer}>
                            <View style={styles.locationRow}>
                                <FontAwesome6 name="location-dot" size={22} color="black" />
                                <Text> Nyabihu</Text>
                            </View>
                            <Text>Irrigation Updates</Text>
                            <Text>
                                <Text style={{ color: COLORS.grey }}>Schedule:</Text>
                                <Text> {currentTime}</Text>
                            </Text>
                            <Text>
                                <Text style={{ color: COLORS.grey }}>Status:</Text>
                                <Text style={{ color: COLORS.primary }}> Active</Text>
                            </Text>
                        </View>
                    </View>

                    {/* Left and right containers for irrigation details */}
                    <View style={{ flexDirection: "row" }}>
                        {/* Left container */}
                        <View style={styles.leftContainer}>
                            {/* Water level and usage details */}
                            <View style={{ alignItems: 'center', padding: 6, marginBottom: 14 }}>
                                <Visuary resizeMode="cover" source={require('../assets/meter.png')} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>85%</Text>
                                    <Text style={styles.text}>1300ml</Text>
                                    <Text style={styles.textUsed}>-700ml</Text>
                                </View>
                            </View>
                            {/* Water level warning */}
                            <View>
                                <Image resizeMode="cover" source={require('../assets/lake.png')} style={styles.lake} />
                                <View style={styles.warningContainer}>
                                    <Image resizeMode="contain" source={require('../assets/warn.png')} style={styles.warn} />
                                    <Text style={{ fontSize: 9 }}>Refill when level drops below 15%.</Text>
                                </View>
                            </View>
                        </View>

                        {/* Right container */}
                        <View style={styles.rightContainer}>
                            {/* Automatic irrigation header */}
                            <View style={styles.automaticIrrigationHeader}>
                                <View style={{ margin: '1%' }}>
                                    <Image resizeMode="contain" source={require('../assets/cntrl.png')} style={styles.cnrtl} />
                                </View>
                                <View style={{ alignItems: "center", marginBottom: 8 }}>
                                    <Text style={styles.automaticIrrigationTitle}>Automatic Irrigation</Text>
                                    <Text style={styles.automaticIrrigationSubtitle}>Real Time Control Of Your Farm</Text>
                                </View>
                            </View>
                            {/* System toggle switch */}
                            <View style={{ alignItems: "center" }}>
                                <Image resizeMode="contain" source={require('../assets/irrig_system.png')} style={styles.system} />
                                <View style={styles.switchContainer}>
                                    <Text>System {isSystemOn ? 'On' : 'Off'}</Text>
                                    <Switch
                                        value={isSystemOn}
                                        onValueChange={toggleSystem}
                                        thumbColor={isSystemOn ? COLORS.blue : COLORS.grey}
                                        style={{ marginLeft: 4 }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Component displaying irrigation graph */}
                    <GridDemo />
                </InnerContainer>
            </StyledContainer>
        </ScrollView>
    );
};

export default Irrigate;

// Styles for various components
const styles = StyleSheet.create({
    greetingContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        width: "100%",
        height: 120,
        paddingVertical: 10,
        paddingHorizontal: 14,
        justifyContent: 'space-between',
        marginBottom: 12,
        marginTop: -12,
    },
    greetingText: {
        fontWeight: "bold",
        fontSize: 14,
    },
    temperatureContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    temperatureTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    temperatureText: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    degreeText: {
        fontSize: 24,
        alignSelf: 'flex-start',
    },
    locationContainer: {
        justifyContent: 'center',
    },
    locationRow: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
        flexDirection: "row",
    },
    leftContainer: {
        backgroundColor: COLORS.white,
        width: '49%',
        height: 180,
        marginRight: '2%',
    },
    rightContainer: {
        backgroundColor: COLORS.white,
        width: '49%',
        height: 180,
        paddingVertical: 4,
        paddingHorizontal: 2,
    },
    textContainer: {
        position: 'absolute',
        alignItems: 'center',
        padding: "14%"
    },
    text: {
        color: COLORS.blue,
        fontSize: 12,
        fontWeight: 'bold',
    },
    lake: {
        width: "100%",
        height: 80
    },
    textUsed: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.left
    },
    cnrtl: {
        width: 20,
        height: 28
    },
    system: {
        width: "90%"
    },
    warn: {
        width: "8%"
    },
    warningContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        paddingTop: 50,
        paddingHorizontal: 8
    },
    automaticIrrigationHeader: {
        alignItems: "center",
        flexDirection: "row"
    },
    automaticIrrigationTitle: {
        fontSize: 14,
        fontWeight: "bold"
    },
    automaticIrrigationSubtitle: {
        color: COLORS.grey,
        fontSize: 8
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -12,
    },
});
