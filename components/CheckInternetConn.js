import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ConnectionContext } from './ConnectionContext';
import NoInternet from '../assets/no-internet.png'
import icons from '../assets/icon.png'


const CheckInternetConn = () => {
  const isConnected = useContext(ConnectionContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (isConnected) {
      navigation.goBack();
    }
  }, [isConnected, navigation]);

  const handleReload = () => {
    if (isConnected) {
      navigation.goBack();
    } else {
      Alert.alert('No internet connection', 'Please check your internet connection and try again.');
    }
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/no-internet.png')} style={{width:100 , height:100}} />
      <Text style={{padding:10}}>Please check your Internet Connection</Text>
      <Button title='Reload' onPress={handleReload} />
      <View style={[styles.bottomView, { backgroundColor: isConnected ? 'green' : 'red' }]}>
        {isConnected ? <Text style={styles.text}>Connected</Text> : <Text style={styles.text}>Not Connected</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    bottom: 0,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CheckInternetConn;
