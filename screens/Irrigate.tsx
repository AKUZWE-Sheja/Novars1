import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Linking } from 'react-native';
import COLORS from '../constants/colors';
import { FontAwesome6 } from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    HeadPart,
    PageLogo,
    LogoName,
    Header,
    InHeadPart,
    UserName,
    UserEmail,
    PagePic,
    UserDeets,
    SalutePic,
    Visuary
} from '../components/styles';

const Irrigate: FC = (): JSX.Element => {
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

            <View style={{flexDirection: "row", backgroundColor: COLORS.white, width: "100%", height: 120, paddingVertical: 10, paddingHorizontal: 14, justifyContent: 'space-between', marginBottom: 12 }}>
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
                <View style={{backgroundColor: COLORS.white, width: '48%', height: 180, marginRight: '4%'}}>

                <View style={{ alignItems: 'center', padding: 6 }}>
        <Visuary resizeMode="cover" source={require('../assets/meter.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>85%</Text>
          <Text style={styles.text}>1300ml</Text>
          <Text style={styles.textUsed}>-700ml</Text>
        </View>
      </View>
                
                
                <View style={{width: '100%', bottom: 0}}>
                <SalutePic resizeMode="cover" source={require('../assets/lake.png')} />
                </View>
                
                </View>
                <View style={{backgroundColor: COLORS.white, width: '48%', height: 180}}></View>
            </View>
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
      textUsed: {
        fontSize: 12, 
        fontWeight: 'bold',   
        color: COLORS.left
      }
});