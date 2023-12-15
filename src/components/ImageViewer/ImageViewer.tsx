import React from 'react';
import {Image, StyleSheet} from 'react-native';

type Props = {
    placeholderImageSource: any;
    selectedImage: string | null;
};

export default function ImageViewer({placeholderImageSource, selectedImage}: Props): React.ReactElement {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
