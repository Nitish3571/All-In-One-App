import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, Button } from 'react-native';
import WebView from 'react-native-webview';
import { ConnectionContext } from '../../components/ConnectionContext';

const AgeCalculate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const isConnected = useContext(ConnectionContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isConnected) {
      navigation.navigate('CheckInternetConn');
    }
  }, [isConnected]);

  const handleReload = () => {
    if (isConnected) {
      setHasError(false);
    } else {
      alert('No internet connection. Please check your connection and try again.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {hasError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Connection timed out or other error occurred.</Text>
          <Button title="Reload" onPress={handleReload} />
        </View>
      ) : (
        <WebView
          source={{ uri: 'https://agecalculater.vercel.app' }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          onHttpError={() => setHasError(true)}
          setBuiltInZoomControls={false}
        />
      )}
      {isLoading && !hasError && (
        <ActivityIndicator size="large" style={styles.loading} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
});

export default AgeCalculate;
