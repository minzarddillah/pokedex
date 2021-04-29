import {connect} from 'react-redux';

import DetailPokemon from './DetailPokemon.screen';
import {
  requestDetailPokemon,
  requestListCompare,
  requestPagingListCompare,
  requestComparePokemon,
} from '../../actions/DetailPokemonAction';

const mapStateToProps = state => ({
  data: state.DetailPokemonReducer.data,
  pokedex: state.DetailPokemonReducer.pokedex,
  offset: state.DetailPokemonReducer.offset,
  loadingPagingPokedex: state.DetailPokemonReducer.loadingPagingPokedex,
});

const mapDispatchToProps = dispatch => ({
  requestDetailPokemon: data => requestDetailPokemon(data, dispatch),
  requestListCompare: () => requestListCompare(dispatch),
  requestPagingListCompare: offset =>
    requestPagingListCompare(offset, dispatch),
  requestComparePokemon: data => requestComparePokemon(data, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPokemon);
