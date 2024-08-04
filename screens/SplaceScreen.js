import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import StackNavigation from '../navigation/StackNavigation';

SplashScreen.preventAutoHideAsync();

export default function SplashScreens() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={{flex:1,justifyContent:'center'}}
      onLayout={onLayoutRootView}>
      <StackNavigation />
    </SafeAreaView>
  );
} 