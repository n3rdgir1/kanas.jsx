import * as React from 'react';
import { Button, View } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <Button
      title="Hiragana"
      onPress={() => navigation.navigate('Deck', { type: 'Hiragana' })}
    />
    <Button
      title="Katakana"
      onPress={() => navigation.navigate('Deck', { type: 'Katakana' })}
    />
  </View>
);

export default Home;
