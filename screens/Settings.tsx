import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';


import {
    StyledContainer,
    InnerContainer,
    Header,
    PagePic,
    InHeadPart,
    UserDeets,
    UserEmail,
    UserName,
    LogoName
} from '../components/styles';

const Settings: FC = (): JSX.Element => {
  return (
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
            <Text style={{fontSize: 18}}>Nothing is in your dashboard, so there are no settings yet!</Text>
        </InnerContainer>
      </StyledContainer>
  );
};

export default Settings;

const styles = StyleSheet.create({
});