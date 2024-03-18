import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import { ContextData } from './ContextApi/Context';
import NavApp from './Nav';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {



  return (
    <SafeAreaProvider>
      <ContextData>
       <NavApp /> 
      </ContextData>
      </SafeAreaProvider>    
  );
}



