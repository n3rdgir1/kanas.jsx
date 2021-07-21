import { CurrentRenderContext } from '@react-navigation/native';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Button, Text, View, TouchableHighlight,
} from 'react-native';
import styles from '../styles';

const Card = ({
  faces, next, kana,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [kana]);

  const onMove = (event) => {
    const { touchHistory: { touchBank } } = event;
    const {
      currentPageX, currentPageY, startPageX, startPageY,
    } = touchBank[0];
    const diffX = Math.abs(startPageX - currentPageX);
    const diffY = Math.abs(startPageY - currentPageY);

    if (diffX > diffY) {
      console.log('flip');
    } else {
      console.log('slide');
    }
  };

  const onRelease = ({ touchHistory: { touchBank } }) => {
    const {
      currentPageX, currentPageY, startPageX, startPageY,
    } = touchBank[0];
    const diffX = Math.abs(startPageX - currentPageX);
    const diffY = Math.abs(startPageY - currentPageY);

    if (diffX > diffY) {
      setIndex((index + 1) % 2);
    } else {
      next();
    }
  };

  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Text
          style={styles.card}
          onMoveShouldSetResponder={() => true}
          onResponderMove={onMove}
          onResponderRelease={onRelease}
        >
          <span>{kana[faces[index]]}</span>
        </Text>
        {/* <Button
          title="Next"
          onPress={next}
        /> */}
      </View>
    </TouchableHighlight>
  );
};

export default Card;
