import React, { FC, useState, useEffect        } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useGreeting from '../hooks/useGreeting'; // Import the custom hook
import { fetchWeatherApi } from 'openmeteo';
import axios from 'axios';

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
  SalutePic
} from '../components/styles';
import COLORS from 'constants/colors';
import ScheduleTable from 'components/AgroTable';

const Dashboard: FC = (): JSX.Element => {
  const { greeting } = useGreeting();  // Use the custom hook for the greeting message

  const [temperature, setTemperature] = useState<number | null>(null);
 
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
    <StyledContainer>
      {/* Header section with logos and user details */}
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
        {/* Greeting and temperature section */}
        <View style={styles.greetingContainer}>
          <View>
            <Text style={styles.greetingText}>{greeting}</Text>
            <View style={styles.temperatureContainer}>
              <SalutePic resizeMode="cover" source={require('../assets/morning.png')} />
              <View style={styles.temperatureTextContainer}>
                <Text style={styles.temperatureText}>
                  {temperature !== null ? temperature : '...'}
                  <Text style={styles.degreeText}>°C</Text>
                </Text>
              </View>
            </View>
          </View>

          {/* Agronomists section */}
          <View style={styles.agronomistsContainer}>
            <View style={styles.agronomistsHeader}>
              <Text style={styles.agronomistsTitle}>Your Agronomists</Text>
            </View>
            <View style={styles.agrContainer}>
              <View style={styles.agrItem}>
                <Image resizeMode="contain" source={require('../assets/agr1.png')} style={styles.agrPic} />
              </View>
              <View style={styles.agrItem}>
                <Image resizeMode="contain" source={require('../assets/agr2.png')} style={styles.agrPic} />
              </View>
              <View style={styles.agrItem}>
                <Image resizeMode="contain" source={require('../assets/agr3.png')} style={styles.agrPic} />
              </View>
            </View>
            <View style={styles.agrContainer}>
              <View style={styles.agrItem}>
                <Image resizeMode="contain" source={require('../assets/agr1.png')} style={styles.agrPic} />
              </View>
              <View style={styles.agrItem}>
                <Image resizeMode="contain" source={require('../assets/agr2.png')} style={styles.agrPic} />
              </View>
              <View style={styles.agrItem}>
                <Image resizeMode="contain" source={require('../assets/agr3.png')} style={styles.agrPic} />
              </View>
            </View>
          </View>
        </View>
        
        {/* Farm status section */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ backgroundColor: COLORS.white, width: "100%", height: 160, marginRight: '2%', flexDirection: "row" }}>
            <View style={{ alignItems: 'center', padding: 6, marginBottom: 14 }}>
              <Text style={{ fontWeight: "bold" }}>Current Status Of My Farm</Text>
              <Image resizeMode="contain" source={require('../assets/farm.png')} style={styles.farmPic} />
            </View>
            
            <View style={{ alignItems: 'center', padding: 6 }}>
              <View style={{ flexDirection: "row", marginLeft: "24%" }}>
                <Text style={{ fontWeight: "bold", color: COLORS.grey }}>Weekly </Text>
                <AntDesign name="down" size={18} color="grey" />
              </View>

              {/* Legend for farm status */}
              <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendCircle, { backgroundColor: COLORS.red }]} />
                  <Text style={styles.legendText}>Unhealthy plants</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendCircle, { backgroundColor: COLORS.primary }]} />
                  <Text style={styles.legendText}>Healthy plants</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendCircle, { backgroundColor: COLORS.grey }]} />
                  <Text style={styles.legendText}>Uncultivated land</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Schedule table component */}
        <ScheduleTable />
      </InnerContainer>
    </StyledContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    width: '100%',
    height: 120,
    paddingVertical: 10,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: -12,
  },
  greetingText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  temperatureContainer: {
    flexDirection: 'row',
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
  agronomistsContainer: {
    justifyContent: 'center',
  },
  agronomistsHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  agronomistsTitle: {
    fontWeight: 'bold',
  },
  agrContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  agrItem: {},
  agrPic: {
    width: 35,
    height: 35,
  },
  farmPic: {
    width: 180,
    height: 160,
    top: -10
  },
  legendContainer: {
    marginTop: "20%",
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  legendCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  legendText: {
    fontSize: 13,
  },
});
