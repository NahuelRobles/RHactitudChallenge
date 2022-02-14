/** @format */

import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';

import { SPINNER_BACKGROUND, SPINNER_COLOR } from '~/constants';

import { styles } from './styles';

export const Spinner = memo(
  ({
    backgroundColor = SPINNER_BACKGROUND,
    style,
    spinnerSize = 'large',
  }) => {
    return (
      <View style={[styles.container, { backgroundColor }, style]}>
        <ActivityIndicator size={spinnerSize} color={SPINNER_COLOR} />
      </View>
    );
  },
);
