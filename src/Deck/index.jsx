import * as React from 'react';
import { useState } from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import Card from '../Card';
import kanas from '../lib/kanas';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Deck = ({ route: { params: { type } } }) => {
  const [faces, setFaces] = useState();
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index + 1);
  };

  if (faces) {
    return (<Card faces={faces} next={next} kana={kanas[index]} />);
  }

  return (
    <View style={styles.container}>
      <Button
        title="Romanji"
        onPress={() => setFaces(['romanji', type.toLowerCase()])}
      />
      <Button
        title={type}
        onPress={() => setFaces([type.toLowerCase(), 'romanji'])}
      />
    </View>
  );
};

export default Deck;
