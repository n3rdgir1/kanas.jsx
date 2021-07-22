import { State } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import { useRef, useState } from 'react';

const useFlip = () => {
  const [index, setIndex] = useState(0);
  const rotation = useRef(new Animated.Value(0)).current;

  const rotateY = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const flipCard = (direction) => ({ nativeEvent }) => {
    const frames = direction > 0 ? [0, 0.25, 0.75, 1] : [1, 0.75, 0.25, 0];

    if (nativeEvent.oldState === State.ACTIVE) {
      rotation.setValue(frames[0]);
      Animated.timing(rotation, {
        toValue: frames[1],
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setIndex((index + 1) % 2);
        rotation.setValue(frames[2]);
        Animated.timing(rotation, {
          toValue: frames[3],
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          rotation.setValue(0);
        });
      });
    }
  };
  return [index, rotateY, flipCard];
};

export default useFlip;
