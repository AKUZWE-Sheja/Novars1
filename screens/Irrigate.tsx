import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Switch} from 'react-native';
import COLORS from '../constants/colors';
import { FontAwesome6 } from '@expo/vector-icons';

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
// import GridDemo from 'components/Graph';

const Irrigate: FC = (): JSX.Element => {

    const [isSystemOn, setIsSystemOn] = useState(false);
  
    const toggleSystem = () => {
      setIsSystemOn((prev) => !prev);
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
                <UserEmail style={{fontSize: 10}}>Userunlknow@gmail.com</UserEmail>
            </UserDeets>
        </InHeadPart>
        </Header>
        <InnerContainer>

            <View style={{flexDirection: "row", backgroundColor: COLORS.white, width: "100%", height: 120, paddingVertical: 10, paddingHorizontal: 14, justifyContent: 'space-between', marginBottom: 12, marginTop: -12, }}>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 14}}>Good Morning Smith,</Text>
                    <View style={{flexDirection: "row"}}>
                    <SalutePic resizeMode="cover" source={require('../assets/morning.png')} />
                    <Text>28 </Text>
                    <Text>Atm</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 14, flexDirection: "row"}}>
                    <FontAwesome6 name="location-dot" size={22} color="black" />
                    <Text> Nyabihu</Text>
                    </View>
                    <Text>Irrigation Updates</Text>
                    <Text>
                        <Text style={{color: COLORS.grey}}>Schedule:</Text>
                        <Text> 10:00 AM</Text>
                    </Text>
                    <Text>
                        <Text style={{color: COLORS.grey}}>Status:</Text>
                        <Text style={{color: COLORS.primary}}> Active</Text>
                    </Text>
                </View>
            </View>

            <View style={{flexDirection: "row"}}>
                <View style={{backgroundColor: COLORS.white, width: '49%', height: 180, marginRight: '2%'}}>

                <View style={{ alignItems: 'center', padding: 6, marginBottom: 14 }}>
        <Visuary resizeMode="cover" source={require('../assets/meter.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>85%</Text>
          <Text style={styles.text}>1300ml</Text>
          <Text style={styles.textUsed}>-700ml</Text>
        </View>
      </View>
                
                
                <View style={{}}>
                  <View>
                <Image resizeMode="cover" source={require('../assets/lake.png')} style={styles.lake} />
                <View style={{flexDirection: "row", alignItems: "center", position: "absolute", paddingTop: 50, paddingHorizontal: 8}}>
                    <Image resizeMode="contain" source={require('../assets/warn.png')} style={styles.warn} />
                    <Text style={{fontSize: 9}}>Refill when level drops below 15%.</Text>
                  </View>
                  </View>
                </View>
                </View>

                <View style={{backgroundColor: COLORS.white, width: '49%', height: 180, paddingVertical: 4, paddingHorizontal: 2}}>

                  <View style={{alignItems: "center", flexDirection: "row"}}>

                    <View style={{margin: '1%'}}>
                      <Image  resizeMode="contain" source={require('../assets/cntrl.png')} style={styles.cnrtl} />
                    </View>

                    <View style={{alignItems: "center", marginBottom: 8}}>
                    <Text style={{fontSize: 14, fontWeight: "bold"}}>Automatic Irrigation</Text>
                    <Text style={{color: COLORS.grey, fontSize: 8}}>Real Time Control Of Your Farm</Text>
                    </View>
                    
                  </View>

                  <View style={{alignItems: "center"}}>
                  <Image resizeMode="contain" source={require('../assets/irrig_system.png')} style={styles.system} />
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -12 }}>
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

            <GridDemo />

      </InnerContainer>

      </StyledContainer>
      </ScrollView>
  );
};

export default Irrigate;

const styles = StyleSheet.create({

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
      }
});