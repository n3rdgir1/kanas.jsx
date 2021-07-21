import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  Text, View,
} from 'react-native';
import Card from '../Card';
import kanas, { shuffle } from '../lib/kanas';
import styles from '../styles';

const Deck = ({ route: { params: { type } } }) => {
  const [faces, setFaces] = useState();
  const [index, setIndex] = useState(0);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    setDeck(shuffle(kanas));
  });

  const next = () => {
    if (index === deck.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  if (faces) {
    return (
      <View style={styles.container}>
        <Card faces={faces} next={next} kana={deck[index]} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.card}
        onPress={() => setFaces(['romanji', type.toLowerCase()])}
      >
        <span>Romanji</span>
      </Text>
      <Text
        style={styles.card}
        onPress={() => setFaces([type.toLowerCase(), 'romanji'])}
      >
        <span>{type}</span>
      </Text>
    </View>
  );
};

export default Deck;
