import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './Search.style';
import color from '../../utils/color';

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <View style={styles.wrapper}>
      <Icon name="search" size={24} color={color.GullGray} />
      <TextInput
        style={styles.input}
        placeholder="Cari pokemon"
        onChangeText={setSearchKeyword}
        value={searchKeyword}
        placeholderTextColor={color.GullGray}
      />
    </View>
  );
};

export default Search;
