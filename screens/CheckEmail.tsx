import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Linking } from 'react-native';
import COLORS from '../constants/colors';
import Button from 'components/Buttons';
import {
    StyledContainer,
    InnerContainer,
    HeadPart,
    PageLogo,
    LogoName
} from '../components/styles';

// Function to handle opening the URL
const handlePress = async (): Promise<void> => {
  const url: string = 'https://accounts.google.com/';
  const supported: boolean = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log("Don't know how to open URI: " + url);
  }
};

const CheckEmail: FC = (): JSX.Element => {
  return (
    <StyledContainer>
      <HeadPart>
        <PageLogo resizeMode="cover" source={require('../assets/logo.png')} />
        <LogoName>Novars</LogoName>
      </HeadPart>
      <InnerContainer>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/sendCode.png')} style={styles.image} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: COLORS.primary, marginBottom: 20, fontWeight: 'bold', fontSize: 25 }}>
            Check Your Email
          </Text>
        </View>

        <View style={{ marginVertical: 18 }}>
          <Text>We have sent you a reset password link</Text>
          <View style={{ alignItems: 'center' }}>
            <Text>on your registered email address</Text>
          </View>
        </View>

        <Button 
          title="Go To Email"
          style={{ marginVertical: 18 }}
          onPress={handlePress} />
      </InnerContainer>
    </StyledContainer>
  );
};

export default CheckEmail;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
