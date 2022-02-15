/**
 * /* eslint-disable react/display-name
 *
 * @format
 */

/** @format */

import React, { memo, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { isEmpty } from 'lodash';

import { useDispatch, useMappedState } from 'redux-react-hook';

import { HEADER } from '~/constants';
import { Carousel } from '~/components';
import { loadVideo, videoSelector } from '~/store/modules';
import { triggerAxiosInterceptors } from '~/screens/navigation/triggerAxiosInterceptors';

import { styles } from './styles';

export const Home = memo(() => {
  const dispatch = useDispatch();
  const { data, isLoading } = useMappedState(videoSelector);

  useEffect(() => {
    dispatch(loadVideo());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isEmpty(data)) {
      triggerAxiosInterceptors();
    }
  }, [isLoading, data, triggerAxiosInterceptors]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{HEADER}</Text>
      </View>
      <ScrollView>
        {data.map((row, index) => {
          return (
            <View key={index}>
              <Carousel data={row?.items} isLoading={isLoading} type={row?.type} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
});
