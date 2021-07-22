import { Dimensions, Platform, StyleSheet } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const height = Math.max(SCREEN_HEIGHT / 2.5, SCREEN_WIDTH / 2.5);
const width = Math.max(SCREEN_HEIGHT / 3.5, SCREEN_WIDTH / 3.5);
const fontSize = SCREEN_HEIGHT / 25;
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
    borderRadius: Platform.OS === 'ios' ? 0 : 10,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize,
    lineHeight: fontSize,
    paddingTop: (height - fontSize) / 2,
    textAlign: 'center',
    margin: 10,
    shadowColor: 'darkgray',
    elevation: 10,
  },
  deck: {
    paddingTop: (height - fontSize * 2.5) / 2,
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },
  big: {
    height: SCREEN_HEIGHT - 120,
    width: SCREEN_WIDTH - 40,
    paddingTop: (SCREEN_HEIGHT - bigFont) / 2 + 30,
    fontSize: bigFont,
    position: 'absolute',
    top: 10,
    left: 10,
    elevation: 5,
  },
});

export default styles;
