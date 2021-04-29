import {connect} from 'react-redux';

import Home from './Home.screen';
import {requestListPokemon, requstTypePokemon} from '../../actions/homeAction';

const mapStateToProps = state => ({
  listOfPokemon: state.homeReducer.listOfPokemon,
  loadingListOfPokemon: state.homeReducer.loadingListOfPokemon,
  typesPokemon: state.homeReducer.typesPokemon,
  loadingTypesPokemon: state.homeReducer.loadingTypesPokemon,
});

const mapDispatchToProps = dispatch => ({
  requestListPokemon: () => requestListPokemon(dispatch),
  requstTypePokemon: () => requstTypePokemon(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
