import React from 'react';
import AuthNavigator from './src/components/navigation/authNavigation'
import MainNavigator from './src/components/navigation/mainNavigation'
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/redux'

export default function App() {
  return (
    <StoreProvider store={store}>
      {
        true ? <AuthNavigator /> : <MainNavigator />
      }
    </StoreProvider>
  )
}
