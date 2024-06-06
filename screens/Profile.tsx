import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Profile: FC = (): JSX.Element => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.background}></View>
      <Image resizeMode="cover" source={require('../assets/profile.jpg')} style={styles.profileImage} />
      <Text style={styles.userName}>Dignity</Text>
      <View style={styles.innerContainer}>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity style={styles.option}>
            <AntDesign name="profile" size={20} color="black" />
            <Text style={styles.optionText}>Edit profile information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="notifications-outline" size={20} color="black" />
            <Text style={styles.optionText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="language" size={20} color="black" />
            <Text style={styles.optionText}>Language</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="credit-card-multiple-outline" size={20} color="black" />
            <Text style={styles.optionText}>Transaction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="head-heart-outline" size={20} color="black" />
            <Text style={styles.optionText}>Theme</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="support-agent" size={20} color="black" />
            <Text style={styles.optionText}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="contacts-outline" size={20} color="black" />
            <Text style={styles.optionText}>Contact us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="lock-outline" size={20} color="black" />
            <Text style={styles.optionText}>Private Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="lock-reset" size={20} color="black" />
            <Text style={styles.optionText}>Reset password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="log-out-outline" size={20} color="black" />
            <Text style={styles.optionText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: "15%",
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 190,
    backgroundColor: '#EBF0F0',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#FFF',
    marginTop: 50,
  },
  userName: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
  innerContainer: {
    width: '90%',
    marginTop: 20,
  },
  editProfileContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    // For Android
    elevation: 5,
    // For iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
});

export default Profile;
