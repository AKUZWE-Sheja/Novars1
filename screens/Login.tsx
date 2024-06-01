import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Pressable } from 'react-native';
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Button from 'components/Buttons';
import Register from './Register';

import {
  StyledContainer,
  InnerContainer,
  HeadPart,
  PageLogo,
  LogoName,
  PageTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  LoginPic
} from '../components/styles';

interface LoginProps {
  navigation: any;
}



const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = (): void => {

    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    if (password.trim() === '') {
      Alert.alert('Error', 'Please enter your password');
      return;
    }    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email');
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
      <InnerContainer>
        <View style={{marginBottom: 16}}>
                <PageTitle>Hii there</PageTitle>
                <Text style={{color: COLORS.grey, fontSize: 16}}>Welcome back,</Text>
        </View>    

        <View style={{flexDirection: "row"}}>
        <Pressable style={styles.button}>
          <LoginPic 
          resizeMode="cover" 
          source={require('../assets/facebook.png')} 
          />
          <Text style={{fontSize: 18}}>Facebook</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <LoginPic 
          // resizeMode="cover" 
          source={require('../assets/google.png')} 
          />
          <Text style={{fontSize: 18}}>Google</Text>
        </Pressable>    
        </View>

        <StyledFormArea>
          <StyledInputLabel>Email</StyledInputLabel>
          <StyledTextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </StyledFormArea>
        <StyledFormArea>
          <StyledInputLabel>Password</StyledInputLabel>
          <View style={styles.passwordInputContainer}>
            <StyledTextInput
              value={password}
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
        
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={{fontWeight: "bold", fontSize: 12, marginTop: 5, marginLeft: 200}}>forgot password?</Text>
        </TouchableOpacity>

<Button
    title="Login"
    style={{
        marginTop: 18,
    }}
  onPress={signIn}
/>


<View style={{ marginVertical: 18, flexDirection: 'row' }}>
<Text>
Don't have an account?{' '}
</Text>
<TouchableOpacity onPress={() => navigation.navigate("Register")}>
<Text style={{ fontWeight: "bold", textDecorationLine: "none", color: COLORS.primary, fontSize: 14}}>Register now</Text>
</TouchableOpacity>
</View>

      </InnerContainer>
    </StyledContainer>

  )
}

export default Login;

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
  button: {
    flexDirection: 'row',
    margin: 12,
    width: '45%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10, // For Android shadow
    backgroundColor: "#fbf5f5", 
    borderRadius: 8, 
  },  

});