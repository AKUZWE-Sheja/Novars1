import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Buttons'; 

import {
  StyledContainer,
  InnerContainer,
  HeadPart,
  PageLogo,
  LogoName,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
} from '../components/styles';

interface ResetProps {
  navigation: any;
}

const Reset: React.FC<ResetProps> = ({ navigation }) => {
  const [isNewPasswordShown, setIsNewPasswordShown] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>('');
  const [isConfirmedNewPasswordShown, setIsConfirmedNewPasswordShown] = useState<boolean>(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  const updateCredentials = (): void => {
    if (newPassword.trim() === '') {
      Alert.alert('Error', 'Please enter your new password');
      return;
    }
    if (confirmNewPassword.trim() === '') {
      Alert.alert('Error', 'Please confirm your new password');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'Your passwords do not match');
      return;
    }
    navigation.navigate('CheckEmail');
  };

  return (
    <StyledContainer>
      <HeadPart>
        <PageLogo resizeMode="cover" source={require('../assets/logo.png')} />
        <LogoName>Novars</LogoName>
      </HeadPart>
      
      <View style={{ marginBottom: '14%' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Reset Password</Text>
        <View style={{ marginTop: '15%' }}>
          <Text style={{ color: COLORS.grey }}>
            Please enter your new password and confirm {'\n'} the password.
          </Text>
        </View>
      </View>
      
      <InnerContainer>
        <StyledFormArea>
          <StyledInputLabel>New Password</StyledInputLabel>
          <View style={styles.passwordInputContainer}>
            <StyledTextInput
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!isNewPasswordShown}
            />
            <TouchableOpacity
              onPress={() => setIsNewPasswordShown(!isNewPasswordShown)}
              style={styles.eyeIcon}
            >
              <Ionicons name={isNewPasswordShown ? 'eye' : 'eye-off'} size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </StyledFormArea>

        <StyledFormArea>
          <StyledInputLabel>Confirm New Password</StyledInputLabel>
          <View style={styles.passwordInputContainer}>
            <StyledTextInput
              value={confirmNewPassword}
              onChangeText={setConfirmNewPassword}
              secureTextEntry={!isConfirmedNewPasswordShown}
            />
            <TouchableOpacity
              onPress={() => setIsConfirmedNewPasswordShown(!isConfirmedNewPasswordShown)}
              style={styles.eyeIcon}
            >
              <Ionicons name={isConfirmedNewPasswordShown ? 'eye' : 'eye-off'} size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </StyledFormArea>

        <Button
          title="Update"
          style={{ marginTop: 18 }}
          onPress={updateCredentials}
        />
      </InnerContainer>
    </StyledContainer>
  );
};

export default Reset;

const styles = StyleSheet.create({
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 5,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
