import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

type Props = {
  onPress?: () => void;
  name: string;
};

export default function CircleButton({onPress, name}: Props): React.ReactElement {
    return (
        <View style={styles.circleButtonContainer}>
          <Pressable style={styles.circleButton} onPress={onPress}>
            <MaterialIcons name={name} size={38} color="#25292e" />
          </Pressable>
        </View>
    );
  }

  const styles = StyleSheet.create({
    circleButtonContainer: {
      width: 84,
      height: 84,
      marginHorizontal: 60,
      borderWidth: 4,
      borderColor: '#7f1d1d',
      borderRadius: 42,
      padding: 3,
    },
    circleButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 42,
      backgroundColor: '#fff',
    },
  });
