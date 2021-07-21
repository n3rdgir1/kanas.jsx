import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text
      style={styles.card}
      onPress={() => navigation.navigate('Deck', { type: 'Hiragana' })}
    >
      <span>Hiragana</span>
    </Text>
    <Text
      style={styles.card}
      onPress={() => navigation.navigate('Deck', { type: 'Katakana' })}
    >
      <span>Katakana</span>
    </Text>
  </View>
);

export default Home;
