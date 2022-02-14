/* eslint-disable react/display-name */
/** @format */

import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';

import { useDispatch, useMappedState } from 'redux-react-hook';

import { loadVideo, videoSelector } from '~/store/modules';

import { styles } from './styles';

export const Home = memo(() => {
  const dispatch = useDispatch();
  const { data, isLoading } = useMappedState(videoSelector);

  useEffect(() => {
    dispatch(loadVideo());
  }, [ dispatch ]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
});
