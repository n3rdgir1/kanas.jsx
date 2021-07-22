import * as React from 'react';
import { useRef } from 'react';

import {
  Animated, Dimensions,
} from 'react-native';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import useFlip from '../hooks/useFlip';
import styles from '../styles';

const Card = ({ faces, kana }) => {
  const { height } = Dimensions.get('window');
  const translateY = useRef(new Animated.Value(0)).current;
  const [index, rotateY, flipCard] = useFlip();

  const nextCard = (direction) => ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(translateY, {
        toValue: height * direction,
        duration: 500,
        useNativeDriver: true,
      }).start();
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
