import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import HomeScreenB2B from './HomeScreenB2B';
import HomeScreenPopular from './HomeScreenPopular';

const { width } = Dimensions.get('window'); // Screen width

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Popular');
  const translateX = useRef(new Animated.Value(0)).current;

  const handleTabChange = (tab) => {
    // Calculate target translateX value
    const toValue = tab === 'Popular' ? 0 : -width;

    // Animate transition
    Animated.timing(translateX, {
      toValue,
      duration: 300,
      useNativeDriver: true, // Use native driver for performance
    }).start();

    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* Animated Container */}
      <Animated.View
        style={[
          styles.animatedContainer,
          { transform: [{ translateX }] }, // Apply horizontal translation
        ]}
      >
        {/* Popular Screen */}
        <View style={styles.screen}>
          <HomeScreenPopular />
        </View>
        {/* B2B Screen */}
        <View style={styles.screen}>
          <HomeScreenB2B />
        </View>
      </Animated.View>

      {/* Floating Tabs */}
      <View style={styles.floatingTabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Popular' && styles.activeTab,
          ]}
          onPress={() => handleTabChange('Popular')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Popular' && styles.activeTabText,
            ]}
          >
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'B2B' && styles.activeTab,
          ]}
          onPress={() => handleTabChange('B2B')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'B2B' && styles.activeTabText,
            ]}
          >
            B2B
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  animatedContainer: {
    flexDirection: 'row', // Place screens side by side
    width: width * 2, // Combined width of both screens
    flex: 1,
  },
  screen: {
    width, // Each screen takes full width of the device
    flex: 1,
  },
  floatingTabs: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#6200ee',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
