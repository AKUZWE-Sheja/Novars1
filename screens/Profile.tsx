import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView} from 'react-native';

import {
    StyledContainer
} from '../components/styles';

const Profile: FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.background}></View>

      {/* User Picture */}
      <Image resizeMode="cover" source={require('../assets/profile.jpg')} style={styles.profileImage} />

      {/* User Name */}
      <Text style={styles.userName}>Edwige</Text>


      {/* Edit Profile */}
      <View style={styles.editProfileContainer}>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </View>

      {/* Line */}
      <View style={styles.line}></View>


      {/* Intro */}
      <Text style={styles.intro}>
        I'm a passionate farmer with expertise in cultivating potatoes and a keen interest in building innovative solutions.
      </Text>

      {/* Skills */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Skills</Text>
      </View>

      {/* Contact Me */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Contact Me</Text>
      </View>


      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Van-eus. All Rights Reserved.
        </Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 227,
    backgroundColor: '#EDF1F9',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#FFF',
    position: 'absolute',
    left: '50%',
    top: 100,
    transform: [{ translateX: -75 }],
  },
  userName: {
    position: 'absolute',
    width: '100%',
    top: 250,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
  location: {
    position: 'absolute',
    width: '100%',
    top: 252,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
    color: '#A3ADB4',
  },
  editProfileContainer: {
    position: 'absolute',
    width: 138,
    height: 44,
    left: '50%',
    top: 289,
    transform: [{ translateX: -69 }],
  },
  editProfile: {
    width: '100%',
    height: '100%',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 44,
    color: '#000',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
  },
  line: {
    position: 'absolute',
    width: 330,
    height: 1,
    left: '50%',
    top: 361,
    transform: [{ translateX: -165 }],
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  sectionHeader: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -63 }],
  },
  sectionHeaderText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
    width: 126,
    textAlign: 'center',
    height: 40,
  },
  intro: {
    position: 'absolute',
    width: '90%',
    left: '5%',
    top: 426,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#455A64',
  },
  skills: {
    position: 'absolute',
    width: '90%',
    left: '5%',
    top: 578,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#455A64',
  },
  contact: {
    position: 'absolute',
    width: '90%',
    left: '5%',
    top: 712,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#455A64',
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 48,
    bottom: 40,
    backgroundColor: '#FFF',
  },
  footerText: {
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 48,
    color: '#A3ADB4',
  },
});

export default Profile;
