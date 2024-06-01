import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, TextInput, ViewProps, TextProps, TextInputProps, ImageProps } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight: number = Constants.statusBarHeight;

export const Colors = {
    white: "#FFFFFF",
    black: "#222222",
    primary: "#1F6115",
    secondary: "#39B68D",
    grey: "#CCCCCC",
    blue: "#16ADED"
}

const { white, black, primary, secondary, grey, blue } = Colors;

export const StyledContainer = styled.View<ViewProps>`
    flex: 1;
    padding: 12px;
`;
export const InnerContainer = styled.View<ViewProps>`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const HeadPart = styled.View<ViewProps>`
    width: 100%;
    height: 90px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center; 
`;

export const Header = styled.View<ViewProps>`
    width: 100%;
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
`;

export const InHeadPart = styled.View<ViewProps>`
    height: 90px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; 
`;

export const UserDeets = styled.View<ViewProps>`
    align-items: center;
`;

export const PageLogo = styled.Image<ImageProps>`
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border-radius: 25px;
`;

export const PagePic = styled.Image<ImageProps>`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 20px;
`;

export const LogoName = styled.Text<TextProps>`
    font-size: 16px;
    font-weight: bold;
`;

export const PageTitle = styled.Text<TextProps>`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

export const StyledFormArea = styled.View<ViewProps>`
    margin-vertical: 8px;
    padding-bottom: 2px;
    width: 100%; 
    align-items: flex-start; 
`;

export const StyledTextInput = styled.TextInput<TextInputProps>`
    font-size: 16px;
    margin-top: 6px;
    border-color: ${grey};
    border-width: 1px;
    border-radius: 6px;
    width: 100%; 
    padding-horizontal: 8px;
    padding-vertical: 3px;
`;

export const StyledInputLabel = styled.Text<TextProps>`
    font-size: 16px;
    margin-bottom: 2px;
    align-self: flex-start; 
`;

export const LoginPic = styled.Image<ImageProps>`
    width: 25px;
    height: 25px;
    margin-right: 8px;
`;

export const UserName = styled.Text<TextProps>`
   font.sixe: 16px;
`;

export const UserEmail = styled.Text<TextProps>`
   color: ${grey};
`;

export const SalutePic = styled.Image<ImageProps>`
    width: 80px;
    height: 80px;
`;

export const Visuary = styled.Image<ImageProps>`
    width: 90px;
    height: 74px;
`;