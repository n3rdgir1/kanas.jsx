import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text
      style={{ ...styles.card, ...styles.deck }}
      onPress={() => navigation.navigate('Deck', { type: 'Hiragana' })}
    >
      あ い う
      {'\n'}
      {'\n'}
      え お ん
    </Text>
    <Text
      style={{ ...styles.card, ...styles.deck }}
      onPress={() => navigation.navigate('Deck', { type: 'Katakana' })}
    >
      ア イ ウ
      {'\n'}
      {'\n'}
      エ オ ン
    </Text>
  </View>
);

export default Home;
