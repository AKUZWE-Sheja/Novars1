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
    // Validate if the email field is empty
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    // Validate the email format
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Navigate to the CheckEmail screen if validation passes
    navigation.navigate('CheckEmail');
  };

  return (
    <StyledContainer>
      {/* Navigate back to Login screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Svg
          width="35"
          height="35"
          viewBox="12 0 32 32"
          fill="none"
          style={{ marginTop: 34 }}
        >
          <Path d="M21.875 26.25L13.125 17.5L21.875 8.75" stroke={COLORS.grey} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </TouchableOpacity>

      <InnerContainer>
        {/* Page title and description */}
        <PageTitle style={{ marginTop: 100, marginBottom: 24 }}>Forgot Password</PageTitle>
        <Text style={{ color: COLORS.grey, fontWeight: 'bold', marginBottom: 40 }}>
          Please enter your registered email or mobile to {'\n'} reset your password.
        </Text>

        {/* Form area for email input */}
        <StyledFormArea>
          <StyledInputLabel>Email</StyledInputLabel>
          <StyledTextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </StyledFormArea>

        {/* Retrieve button */}
        <Button
          title="Retrieve"
          style={{ marginVertical: 18 }}
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
