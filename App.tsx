import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const showTabBar = true; // Example condition to hide the tab bar

const ProfileScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: 'Profile' });
  }, [navigation]);

  return (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const SettingsScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text>Settings Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);

const CustomDrawerContent = ({ navigation }) => (
  <View style={styles.drawerContainer}>
    <Button title="Go to Home" onPress={() => navigation.closeDrawer()} />
    <Button title="Go to Profile" onPress={() => navigation.closeDrawer()} />
    <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
  </View>
);

const TabNavigator = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: showTabBar
        ? {} // Show default tab bar style
        : { display: 'none' }, // Hide tab bar
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
      listeners={{
        focus: () => navigation.setOptions({ title: 'Home' }),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
      listeners={{
        focus: () => navigation.setOptions({ title: 'Profile' }),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerTitleAlign: 'center', // Center the title
          drawerStyle: {
            width: '100%',
          },
        }}
      >
        <Drawer.Screen name="MainTabs" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
