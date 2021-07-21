import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  card: {
    display: 'flex',
    height: 'max(40vh, 40vw)',
    width: 'max(30vh, 30vw)',
    backgroundColor: '#fff',
    borderColor: 'darkgray',
    borderRadius: '10px',
    borderWidth: StyleSheet.hairlineWidth,
    margin: '20',
    fontSize: '5vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
