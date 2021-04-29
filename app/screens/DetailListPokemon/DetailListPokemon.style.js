import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.PokemonLogoDarkBlue,
  },
  filterButton: {
    marginLeft: 10,
  },
  seperator: {
    height: 20,
    borderBottomWidth: 1,
  },
  contentModal: {
    padding: 20,
  },
});

export default styles;
