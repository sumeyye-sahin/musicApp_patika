import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  inner_container: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    paddingTop: 5,
    flexDirection: 'row',
    flex: 1,
  },
  year: {
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  artist: {
    color: 'black',
    fontWeight: 'bold',
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
  },
  soldout_text_container: {
    color: 'red',
    padding: 5,
  },
  context_container: {
    flexDirection: 'row',
  },
});

export default styles;
