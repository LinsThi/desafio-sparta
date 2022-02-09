import React from 'react';

import { CityProvider } from '~/shared/context/CityContext';

import { TabNavigator } from './shared/routes';

export default function App() {
  return (
    <CityProvider>
      <TabNavigator />
    </CityProvider>
  );
}
