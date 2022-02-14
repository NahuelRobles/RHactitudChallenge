/* eslint-disable react/display-name */
/** @format */

import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { isEmpty } from 'lodash';

import { useDispatch, useMappedState } from 'redux-react-hook';

import { loadVideo, videoSelector } from '~/store/modules';

import { triggerAxiosInterceptors } from '~/screens/navigation/triggerAxiosInterceptors';

import { styles } from './styles';

export const Home = memo(() => {
  const dispatch = useDispatch();
  const { data, isLoading } = useMappedState(videoSelector);

  useEffect(() => {
    dispatch(loadVideo());
  }, [ dispatch ]);

  useEffect(() => {
    if (!isLoading && !isEmpty(data)) {
      triggerAxiosInterceptors();
    }
  }, [ isLoading, data, triggerAxiosInterceptors ]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
});
