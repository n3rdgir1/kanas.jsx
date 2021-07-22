import * as React from 'react';
import { useState, useRef } from 'react';

import {
  Animated, Dimensions,
} from 'react-native';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import styles from '../styles';

const Card = ({
  faces, kana,
}) => {
  const [index, setIndex] = useState(0);
  const {
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  const translateY = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const rotateY = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const nextCard = (direction) => ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(translateY, {
        toValue: SCREEN_HEIGHT * direction,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const flipCard = (direction) => ({ nativeEvent }) => {
    const frames = direction > 0 ? [0, 0.25, 0.75, 1] : [1, 0.75, 0.25, 0];

    if (nativeEvent.oldState === State.ACTIVE) {
      rotation.setValue(frames[0]);
      Animated.timing(rotation, {
        toValue: frames[1],
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setIndex((index + 1) % 2);
        rotation.setValue(frames[2]);
        Animated.timing(rotation, {
          toValue: frames[3],
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          rotation.setValue(0);
        });
      });
    }
  };

  return (
    <FlingGestureHandler
      direction={Directions.UP}
      onHandlerStateChange={nextCard(-1)}
    >
      <FlingGestureHandler
        direction={Directions.DOWN}
        onHandlerStateChange={nextCard(1)}
      >
        <FlingGestureHandler
          direction={Directions.LEFT}
          onHandlerStateChange={flipCard(-1)}
        >
          <FlingGestureHandler
            direction={Directions.RIGHT}
            onHandlerStateChange={flipCard(1)}
          >
            <Animated.Text
              style={[{ ...styles.card, ...styles.big }, {
                transform: [
                  { translateY },
                  { rotateY },
                ],
              }]}
            >
              <Animated.Text>{kana[faces[index]]}</Animated.Text>
            </Animated.Text>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Card;
