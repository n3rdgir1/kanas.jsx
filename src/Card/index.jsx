import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Button, Text, View,
} from 'react-native';
import styles from '../styles';

const Card = ({
  faces, next, kana,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [kana]);

  return (
    <View style={styles.container}>
      <Text
        style={styles.card}
        onPress={() => setIndex((index + 1) % 2)}
      >
        <span>{kana[faces[index]]}</span>
      </Text>
      <Button
        title="Next"
        onPress={next}
      />
    </View>
  );
};

export default Card;
