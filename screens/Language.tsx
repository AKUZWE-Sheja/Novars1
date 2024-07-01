import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
  StyledContainer,
  InnerContainer,
  Header,
  PagePic,
  InHeadPart,
  UserDeets,
  UserEmail,
  UserName,
  LogoName,
  PageTitle,
} from '../components/styles'; 
import COLORS from 'constants/colors'; 

interface LanguagesProps {
  navigation: any;
}

const Languages: FC<LanguagesProps> = ({ navigation }): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <ScrollView>
      <StyledContainer>
        <InnerContainer>
          {/* Header with back button and page title */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "10%", marginBottom: "5%", paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="black" style={{ marginLeft: -110, paddingRight: 90 }} />
            </TouchableOpacity>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Languages</Text>
          </View>

          <View style={{width: "90%"}}>
            {/* Section for suggested languages */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: "-5%" }}>Suggested</Text>
            
            {/* Individual language selection options */}
            <View style={styles.radioRow}>
              <Text>English (US)</Text>
              <TouchableOpacity 
                style={[
                  styles.radioCircle, 
                  selectedLanguage === 'English (US)' && styles.selectedOuterRb
                ]} 
                onPress={() => handleLanguageSelect('English (US)')}
              >
                {selectedLanguage === 'English (US)' && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>

            <View style={styles.radioRow}>
              <Text>English (UK)</Text>
              <TouchableOpacity 
                style={[
                  styles.radioCircle, 
                  selectedLanguage === 'English (UK)' && styles.selectedOuterRb
                ]} 
                onPress={() => handleLanguageSelect('English (UK)')}
              >
                {selectedLanguage === 'English (UK)' && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>

            <View style={styles.line}></View>

            {/* Section for other languages */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: "-5%", marginTop: "10%" }}>Others</Text>

            <View style={styles.radioRow}>
              <Text>Kinyarwanda</Text>
              <TouchableOpacity 
                style={[
                  styles.radioCircle, 
                  selectedLanguage === 'Kinyarwanda' && styles.selectedOuterRb
                ]} 
                onPress={() => handleLanguageSelect('Kinyarwanda')}
              >
                {selectedLanguage === 'Kinyarwanda' && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>

            {/* Repeat similar blocks for other languages */}
            {/* ... */}

          </View>
        </InnerContainer>
      </StyledContainer>
    </ScrollView>
  );
};

export default Languages;

// Styles for radio buttons and other UI elements
const styles = StyleSheet.create({
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  selectedOuterRb: {
    backgroundColor: COLORS.primary,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  line: {
    borderBottomColor: COLORS.grey,
    width: "100%",
    borderBottomWidth: 0.3,
    marginTop: 20,
    marginBottom: -10
  }
});
