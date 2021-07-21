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
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    setDeck(shuffle(kanas));
  }, []);

  if (faces) {
    return (
      <View style={styles.container}>
        <Text style={{ ...styles.card, ...styles.big }}>Done!</Text>
        {deck.map((card) => <Card faces={faces} kana={card} key={card.romanji} />)}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.card}
        onPress={() => setFaces(['romanji', type.toLowerCase()])}
      >
        <Text>Romanji</Text>
      </Text>
      <Text
        style={styles.card}
        onPress={() => setFaces([type.toLowerCase(), 'romanji'])}
      >
        <Text>{type}</Text>
      </Text>
    </View>
  );
};

export default Deck;
