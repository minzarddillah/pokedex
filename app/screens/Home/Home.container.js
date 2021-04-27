import {connect} from 'react-redux';

import Home from './Home.screen';
import {requestListPokemon} from '../../actions/homeAction';

const mapStateToProps = state => ({
  listOfPokemon: state.homeReducer.listOfPokemon,
});

const mapDispatchToProps = dispatch => ({
  requestListPokemon: () => requestListPokemon(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
