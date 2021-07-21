import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text
      style={styles.card}
      onPress={() => navigation.navigate('Deck', { type: 'Hiragana' })}
    >
      Hiragana
    </Text>
    <Text
      style={styles.card}
      onPress={() => { console.log('hi'); navigation.navigate('Deck', { type: 'Katakana' }); }}
    >
      Katakana
    </Text>
  </View>
);

export default Home;
