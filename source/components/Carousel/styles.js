/** @format */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingContent: (height, width) => ({
    height: height,
    width: width,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignContent: 'center',
  }),
  imageContent: (isLoadingImage) => ({
    position: isLoadingImage ? 'absolute' : 'relative',
  }),
  image: (height, width, isLoadingImage) => ({
    height: height,
    width: width,
    opacity: isLoadingImage ? 0 : 1,
  }),
  textContent: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#D05237',
    backgroundColor: '#B85A47',
    opacity: 0.7,
    borderRadius: 20,
  },
  content: {
    padding: 10,
  },
  container: {
    flex: 1,
  },
  textType: {
    alignSelf:'center', 
    textTransform:'capitalize', 
    fontSize: 18, 
    fontWeight:'bold'
  }
});
