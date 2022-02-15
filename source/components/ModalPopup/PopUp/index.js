/** @format */

import React, { memo, useState } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

import { BUFFERING, NOT_AVAILABLE } from '~/constants';

import { styles } from './styles';

export const PopUp = memo(({item = null}) => {
  const [error, setError] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}> {item?.title} </Text>
      <Text style={styles.textDescription} numberOfLines={2}>
        {item?.description}
      </Text>
      {item?.videoUrl && !error ? (
        <View>
        <Video
          source={{ uri: item?.videoUrl }}
          onLoad={(buffer) => {setIsBuffering(buffer.isBuffering)}}
          onError={() => {
            setError(true);
          }}
          style={styles.videoContent}
        />
        {isBuffering && <Text style={styles.bufferingText}>{BUFFERING}</Text>}
        </View>
      ) : (
        <View style={styles.notAvailable}>
          <Text style={styles.notAvailableText}>{NOT_AVAILABLE}</Text>
        </View>
      )}
    </View>
  );
});
