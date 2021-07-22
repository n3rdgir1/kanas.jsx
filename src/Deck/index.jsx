import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

import {
  Animated, Dimensions, Text, View,
} from 'react-native';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import useFlip from '../hooks/useFlip';
import Card from '../Card';
import kanas, { shuffle } from '../lib/kanas';
import styles from '../styles';

const Deck = ({ route: { params: { type } } }) => {
  const { height } = Dimensions.get('window');
  const [faces, setFaces] = useState();
  const [deck, setDeck] = useState([]);
  const translateY = useRef(new Animated.Value(0)).current;
  const [index, rotateY, flipCard] = useFlip();
  const options = ['romanji', type.toLowerCase()];

  useEffect(() => {
    setDeck(shuffle(kanas));
  }, []);

  const nextCard = (direction) => ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(translateY, {
        toValue: height * direction,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setFaces([options[index], options[(index + 1) % 2]]);
      });
    }
  };

  if (faces) {
    return (
      <View style={styles.container}>
        <Text style={{ ...styles.card, ...styles.big }}>&#x1F389;</Text>
        {deck.map((card) => <Card faces={faces} kana={card} key={card.romanji} />)}
      </View>
    );
  }

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
              <Animated.Text>
                [
                {kanas[0][options[index]]}
                ]
              </Animated.Text>
            </Animated.Text>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Deck;
