import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Register, CheckEmail, Login, Forgot, Reset, Welcome, Security, WhiteWelcome, Automate, Notify, Irrigate, Settings, Dashboard, Notifications, Profile, Languages, Policies } from 'screens/index';
import { Entypo } from '@expo/vector-icons';  
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import COLORS from 'constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const upScreen = {
  tabBarShowLabel: false,
  headerShown: false
};

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute' as 'absolute', 
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 55,
    backgroundColor: '#fff'  
  }
};

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Irrigate"
        component={Irrigate}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: focused ? 'rgba(31, 97, 21, 0.8)' : 'transparent',
              }}
            >
              <Entypo name="home" size={24} color={focused ? COLORS.white : COLORS.black} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dash"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: focused ? 'rgba(31, 97, 21, 0.8)' : 'transparent',
              }}
            >
              <MaterialIcons name="dashboard" size={24} color={focused ? COLORS.white : COLORS.black} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifs"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: focused ? 'rgba(31, 97, 21, 0.8)' : 'transparent',
              }}
            >
              <Ionicons name="notifications" size={24} color={focused ? COLORS.white : COLORS.black} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: focused ? 'rgba(31, 97, 21, 0.8)' : 'transparent',
              }}
            >
              <Ionicons name="settings" size={24} color={focused ? COLORS.white : COLORS.black} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profilee"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: focused ? 'rgba(31, 97, 21, 0.8)' : 'transparent',
              }}
            >
              <Feather name="user" size={24} color={focused ? COLORS.white : COLORS.black} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={upScreen}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CheckEmail" component={CheckEmail} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Automate" component={Automate} />
        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="WhiteWelcome" component={WhiteWelcome} />
        <Stack.Screen name="Languages" component={Languages} />
        <Stack.Screen name="Policies" component={Policies} />
        <Stack.Screen name="Irrigate" component={TabNavigator} initialParams={{ screen: "Irrigatee" }} />
        <Stack.Screen name="Dashboard" component={TabNavigator} initialParams={{ screen: "Dash" }} />
        <Stack.Screen name="Settings" component={TabNavigator} initialParams={{ screen: "Setting" }} />
        <Stack.Screen name="Profile" component={TabNavigator} initialParams={{ screen: "Profilee" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
