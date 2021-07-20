import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Button, Text, View,
} from 'react-native';

const Card = ({
  faces, next, kana,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [kana]);

  return (
    <View>
      <Text>{kana[faces[index]]}</Text>
      <Button
        title="Flip"
        onPress={() => setIndex((index + 1) % 2)}
      />
      <Button
        title="Next"
        onPress={next}
      />
    </View>
  );
};

export default Card;
