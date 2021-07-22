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
  const options = ['romanji', type.toLowerCase()];
  const [faces, setFaces] = useState(options);
  const [deck, setDeck] = useState([]);
  const translateY = useRef(new Animated.Value(0)).current;
  const [index, rotateY, flipCard] = useFlip();

  useEffect(() => {
    setDeck(shuffle(kanas));
  }, []);

  useEffect(() => {
    setFaces([options[index], options[(index + 1) % 2]]);
  }, [index]);

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
            <View style={styles.container}>
              <Text style={{ ...styles.card, ...styles.big }}>&#x1F389;</Text>
              {deck.map((card) => <Card faces={faces} kana={card} key={card.romanji} />)}
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
            </View>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Deck;
