/** @format */

import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    width: 200,
    textAlign: 'center',
    marginTop: 35,
    fontWeight: 'bold',
  },
  textDescription: {
    maxHeight: 50,
    padding: 8,
    textAlign: 'left',
  },
  videoContent: {
    height: Platform.OS === 'android' ? 200 : 150,
    width: 300,
    marginTop: 10,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
  bufferingText: {
    paddingLeft: 18,
    marginTop: 5,
  },
  notAvailable: {
    height: 150,
    justifyContent: 'center',
  },
  notAvailableText: {
    fontWeight: 'bold',
  }
});
