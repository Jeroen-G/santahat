import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';


type Props = {
    imageSize: number;
    scale: number;
};

// @ts-ignore
import StickerSource from '@/../assets/images/kerstmuts.png';

export default function Sticker({imageSize, scale}: Props): React.ReactElement {
    const scaleImage = useSharedValue(1);
    const currentScale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    useEffect(() => {
        scaleImage.value = withSpring(scale);
        currentScale.value = withSpring(scale);
    }, [scale]);

    const pinch = Gesture.Pinch()
        .onUpdate((e) => {
            currentScale.value = scaleImage.value * e.scale;
        })
        .onEnd(() => {
            scaleImage.value = currentScale.value;
        });

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            currentScale.value = withSpring(1);
            scaleImage.value = withSpring(1);
        });

    const drag = Gesture.Pan()
        .onChange((event) => {
            translateX.value += event.changeX;
            translateY.value += event.changeY;
        });

    const imageStyle = useAnimatedStyle(() => {
        return {transform: [{ scale: currentScale.value }]}
    });

    const containerStyle = useAnimatedStyle(() => {
        return {transform: [{translateX: translateX.value}, {translateY: translateY.value}]};
    });

    return (
        <GestureDetector gesture={Gesture.Race(drag)}>
            <Animated.View style={[containerStyle, {top: -350}]}>
                <GestureDetector gesture={Gesture.Race(pinch, doubleTap)}>
                    <Animated.Image
                        source={StickerSource}
                        resizeMode="cover"
                        style={[imageStyle, {width: imageSize, height: imageSize}]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({});
