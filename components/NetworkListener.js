// NetworkListener.js
import { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { ConnectionContext } from './ConnectionContext';

const NetworkListener = ({ children }) => {
  const isConnected = useContext(ConnectionContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        navigation.navigate('CheckInternetConn');
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  return children;
};

export default NetworkListener;
