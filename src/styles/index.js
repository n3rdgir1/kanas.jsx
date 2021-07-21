import { Dimensions, StyleSheet } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const height = Math.max(SCREEN_HEIGHT / 2.5, SCREEN_WIDTH / 2.5);
const width = Math.max(SCREEN_HEIGHT / 3.5, SCREEN_WIDTH / 3.5);
const fontSize = SCREEN_HEIGHT / 20;
const bigFont = fontSize * 4;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height,
  },
  card: {
    height,
    width,
    backgroundColor: '#fff',
    borderColor: 'darkgray',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize,
    lineHeight: fontSize,
    paddingTop: (height - fontSize) / 2,
    textAlign: 'center',
    margin: 10,
  },
  big: {
    height: SCREEN_HEIGHT - 100,
    width: SCREEN_WIDTH - 20,
    paddingTop: (SCREEN_HEIGHT - bigFont) / 2 + 50,
    fontSize: bigFont,
  },
});

export default styles;
