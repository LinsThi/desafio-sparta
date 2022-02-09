import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Home } from '~/modules/FlatCity/views/Home';
import { CityTemperature } from '~/modules/WeatherCity/views/CityTemperature';

import { Header } from '../../components/Header';
import { CITY_WEATHER, HOME_SCREEN } from '../../constants/routes';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name={HOME_SCREEN}
        options={{
          header: props => <Header {...props} />,
        }}
      />

      <Stack.Screen
        component={CityTemperature}
        name={CITY_WEATHER}
        options={{
          header: props => <Header {...props} enableNavigation />,
        }}
      />
    </Stack.Navigator>
  );
}
