import {connect} from 'react-redux';

import DetailListPokemon from './DetailListPokemon.screen';
import {
  getDetailListPokemon,
  requestPagingDetailList,
  getListFilter,
} from '../../actions/DetailListPokemonAction';

const mapStateToProps = state => ({
  data: state.DetailListPokemonReducer.data,
  offset: state.DetailListPokemonReducer.offset,
  listFilter: state.DetailListPokemonReducer.listFilter,
});

const mapDispatchToProps = dispatch => ({
  getDetailListPokemon: type => getDetailListPokemon(type, dispatch),
  requestPagingDetailList: offset => requestPagingDetailList(offset, dispatch),
  getListFilter: () => getListFilter(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailListPokemon);
