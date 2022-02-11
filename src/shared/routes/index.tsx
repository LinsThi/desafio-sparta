import { AntDesign, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NewCity } from '~/modules/SearchCity/views/NewCity';

import { Header } from '../components/Header';
import { CITIES_SCREEN, HOME_TAB_SCREEN } from '../constants/routes';
import { HomeStack } from './stackNavigator';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5091ab" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#5091ab',
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#87ceeb',
          }}
        >
          <Tab.Screen
            component={HomeStack}
            name={HOME_TAB_SCREEN}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, color }) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            component={NewCity}
            name={CITIES_SCREEN}
            options={{
              header: props => <Header {...props} enableNavigation />,
              tabBarIcon: ({ size, color }) => (
                <AntDesign name="pluscircle" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
