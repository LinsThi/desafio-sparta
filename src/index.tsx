import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { TabNavigator } from './shared/routes';
import store from './shared/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <TabNavigator />
    </StoreProvider>
  );
}
