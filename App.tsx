import React from 'react';
import AuthNavigator from './src/components/navigation/authNavigation'
import MainNavigator from './src/components/navigation/mainNavigation'
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/redux'
import theme from './Theme';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        {
          true ? <AuthNavigator /> : <MainNavigator />
        }
      </PaperProvider>
    </StoreProvider>
  )
}
