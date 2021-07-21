import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import {
  Text, View, Animated, Dimensions,
} from 'react-native';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import styles from '../styles';

const Card = ({
  faces, next, kana,
}) => {
  const [index, setIndex] = useState(0);
  const {
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  const translateY = useRef(new Animated.Value(0)).current;

  const nextCard = (direction) => ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(translateY, {
        toValue: SCREEN_HEIGHT * direction,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        next();
        setIndex(0);
        translateY.setValue(0);
      });
    }
  };

  const flipCard = (direction) => ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      // Animated.spring(this.translateY, {
      //   toValue: Animated.add(this.translateY, 10),
      //   useNativeDriver: USE_NATIVE_DRIVER,
      // }).start();
      setIndex((index + 1) % 2);
    }
  };

  return (
    <View style={styles.container}>
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
            onHandlerStateChange={flipCard(1)}
          >
            <FlingGestureHandler
              direction={Directions.RIGHT}
              onHandlerStateChange={flipCard(-1)}
            >
              <Animated.Text
                style={[{ ...styles.card, ...styles.big }, {
                  transform: [
                    { translateY },
                  ],
                }]}
              >
                <Text>{kana[faces[index]]}</Text>
              </Animated.Text>
            </FlingGestureHandler>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </View>
  );
};

export default Card;
