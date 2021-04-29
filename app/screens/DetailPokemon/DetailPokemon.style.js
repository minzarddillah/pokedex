import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.White,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBattle: {
    alignSelf: 'center',
    backgroundColor: color.PokemonLogoLightBlue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  textButtonBattle: {
    color: color.White,
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerTabScene: {
    padding: 10,
  },
  containerAbout: {
    flexDirection: 'row',
  },
  titleAbout: {
    fontWeight: 'bold',
  },
  labelAbout: {
    flex: 2,
    borderWidth: 1,
    borderColor: color.GullGray,
    color: color.Scorpion,
    padding: 5,
  },
  valueAbout: {
    flex: 3,
    borderWidth: 1,
    borderColor: color.GullGray,
    padding: 5,
  },
  wrapperStats: {
    marginBottom: 20,
  },
  titleTabStats: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonVS: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.SanMarino,
  },
  textButtonVS: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.White,
  },
  containerListCompare: {
    padding: 20,
  },
});

export default styles;
