/** @format */

import React, { memo, useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { PopUp } from '../ModalPopup/PopUp';

import { Spinner, ModalPopup } from '~/components';
import { NO_DATA } from '~/constants';
import { fixImage } from '~/utils';

import { styles } from './styles';

export const Carousel = memo(({ data = null, isLoading = true, type = '' }) => {

  const height = type === 'poster' ? 480 : 400;
  const width = type === 'poster' ? 300 : 500;

  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [item, setItem] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const keyExtractor = (item, index) => {
    return (item.id || item.key || index).toString();
  };

  const onCloseModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleOnPress = useCallback((videoItem) => {
    setItem(videoItem);
    setIsVisible(true);
  }, []);

  const handleRenderItem = useCallback(({ item, index }) => {
    const uri = { uri: fixImage(item.imageUrl)}
    return (
      <TouchableOpacity onPress={() => {handleOnPress(item)}}>
        <View style={styles.content} >
          {isLoadingImage && <View style={styles.loadingContent(height, width)}><Spinner/></View>}
         <View style={styles.imageContent(isLoadingImage)}>
          <Image source={uri} style={styles.image(height, width, isLoadingImage)} onLoadEnd={() => {index === ( data.length - 1 ) && setIsLoadingImage(false)}}/>
         </View>
          {!isLoadingImage &&
          <View style={styles.textContent}>
            <Text style={styles.content}>
              {item.title}
            </Text>
          </View>}
        </View>
      </TouchableOpacity>
    );
  }, [isLoadingImage, setIsLoadingImage]);

  const handleRenderContent = useCallback(() => {
    return (
      <FlatList
        data={data}
        horizontal
        renderItem={handleRenderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          !isLoading &&
          !data.length && (
            <View style={styles.wrapper}>
              <Text>{NO_DATA}</Text>
            </View>
          )
        }
        ListFooterComponent={
          isLoading && (
            <View style={styles.wrapper}>
              <Spinner />
            </View>
          )
        }
      />
    );
  }, [handleRenderItem, isLoading, data]);

  return (
    <View style={styles.container}>
      <Text style={styles.textType}>{type}</Text>
      {handleRenderContent()}
      <ModalPopup onRequestClose={onCloseModal} isVisible={isVisible}>
        <PopUp item={item} />
      </ModalPopup>
    </View>
  );
});
