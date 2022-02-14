/* eslint-disable react-native/no-color-literals */
/** @format */

import { StyleSheet } from 'react-native';
//import { FONT_SIZE_TITLE, TITLE_FONT_FAMILY } from '~/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#f44336',
    height: 48,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  title: {
    color: '#ffffff',
    //fontSize: FONT_SIZE_TITLE,
    //fontFamily: TITLE_FONT_FAMILY,
  },
});
