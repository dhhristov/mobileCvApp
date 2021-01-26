import React, { useEffect } from 'react';
import AuthNavigator from './src/components/navigation/authNavigation'
import MainNavigator from './src/components/navigation/mainNavigation'
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider, useSelector } from 'react-redux';
import { store } from './src/redux'
import { IUserState } from './src/redux/reducers/auth.reducer';

export default function App() {
  return (
    <StoreProvider store={store}>
      <AppWrapper /> 
    </StoreProvider>
  )
}

const AppWrapper = () => {
  const isAuth = useSelector((state: IUserState) => state.isAuth)
  useEffect(() => {
    isAuth
}, [])
  if(isAuth) {
    return (
      <MainNavigator />
      )
    } else {
      return (
        <AuthNavigator />
      )
    }
}
