import { AntDesign, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Home } from '~/modules/FlatCity/views/Home';
import { NewCity } from '~/modules/SearchCity/views/NewCity';

import { Header } from '../components/Header';
import { CITIES_SCREEN, HOME_SCREEN } from '../constants/routes';

const Tab = createBottomTabNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5091ab" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#5091ab',
            },
          }}
        >
          <Tab.Screen
            component={Home}
            name={HOME_SCREEN}
            options={{
              header: props => <Header {...props} />,
              tabBarIcon: ({ size, color }) => (
                <Entypo name="home" size={size} color={color} />
              ),
              tabBarActiveTintColor: '#87ceeb',
              tabBarInactiveTintColor: '#ffffff',
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
              tabBarActiveTintColor: '#87ceeb',
              tabBarInactiveTintColor: '#ffffff',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
