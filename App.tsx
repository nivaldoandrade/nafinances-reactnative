import React from 'react';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoader] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoader) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
