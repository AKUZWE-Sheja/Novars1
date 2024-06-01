import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Buttons';
import { Svg, Path } from 'react-native-svg';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput
} from '../components/styles';

interface ForgotProps {
    navigation: any;
}

const Forgot: React.FC<ForgotProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');

  const handleRetrieve = (): void => {

    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
  
    navigation.navigate('CheckEmail');
  };
  

  return (
    <StyledContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Svg
       width="35" 
       height="35" 
       viewBox="12 0 32 32" 
       fill="none" 
    //    xmlns="http://www.w3.org/2000/svg"
       style={{marginTop: 34}}>
        <Path d="M21.875 26.25L13.125 17.5L21.875 8.75" stroke={COLORS.grey} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
      </TouchableOpacity>
      <InnerContainer>
        <PageTitle style={{ marginTop: 100, marginBottom: 24 }}>Forgot Password</PageTitle>
        <Text style={{ color: COLORS.grey, fontWeight: 'bold', marginBottom: 40 }}>Please enter your registered email or mobile to {'\n'} reset your password.</Text>
        <StyledFormArea>
          <StyledInputLabel>Email</StyledInputLabel>
          <StyledTextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </StyledFormArea>
        <Button
          title="Retrieve"
          style={{
            marginVertical: 18,
          }}
          onPress={handleRetrieve}
        />
      </InnerContainer>
    </StyledContainer>
  );
}

const styles = StyleSheet.create({
  // styles
});

export default Forgot;