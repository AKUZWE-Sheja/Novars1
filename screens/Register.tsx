import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Alert, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from 'components/Buttons';
import COLORS from '../constants/colors';

import {
  StyledContainer,
  InnerContainer,
  HeadPart,
  PageLogo,
  LogoName,
  PageTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput
} from '../components/styles';

interface RegisterProps {
  navigation: any;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signUp = (): void => {
    
    if (!fullName.trim()) {
      Alert.alert('Error', 'Please enter your full name');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    navigation.navigate('CheckEmail');
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern: RegExp = /^\d{10}$/; 
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <StyledContainer>
      <HeadPart>
        <PageLogo resizeMode="cover" source={require('../assets/logo.png')} />
        <LogoName>Novars</LogoName>
      </HeadPart>
      <InnerContainer>
        <PageTitle>Register</PageTitle>

        <StyledFormArea>
          <StyledInputLabel>Full Name</StyledInputLabel>
          <View style={styles.InputContainer}>
          <StyledTextInput onChangeText={setFullName} />
          </View>
        </StyledFormArea>
        <StyledFormArea>
          <StyledInputLabel>Email</StyledInputLabel>
          <View style={styles.InputContainer}>
          <StyledTextInput onChangeText={setEmail} />
          </View>
        </StyledFormArea>
        <StyledFormArea>
          <StyledInputLabel>Phone Number</StyledInputLabel>
          <View style={styles.InputContainer}>
          <StyledTextInput onChangeText={setPhoneNumber} />
          </View>
        </StyledFormArea>
        <StyledFormArea>
          <StyledInputLabel>Password</StyledInputLabel>
          <View style={styles.InputContainer}>
            <StyledTextInput
              onChangeText={setPassword}
              secureTextEntry={!isPasswordShown}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eyeIcon}
            >
              <Ionicons name={isPasswordShown ? "eye" : "eye-off"} size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </StyledFormArea>

        <Button
          title="Register"
          style={{
            marginVertical: 8,
          }}
          onPress={signUp}
        />

        <View style={{ marginVertical: 18 }}>
          <Text>
            By registering you agree to <Text style={{ fontWeight: 'bold' }}>Terms & conditions</Text>
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text>
              and <Text style={{ fontWeight: 'bold' }}>privacy Policy</Text> of Novars
            </Text>
          </View>
        </View>
      </InnerContainer>
    </StyledContainer>
  );
}

export default Register;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 5,
    bottom: 0,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
});

