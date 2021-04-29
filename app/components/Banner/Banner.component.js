import React from 'react';
import {Linking, TouchableWithoutFeedback, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Image from 'react-native-fast-image';
import PropTypes from 'prop-types';

import {verticalScale} from '../../utils/helper';
import styles from './Banner.style';

const Banner = ({data}) => {
  const onPressBanner = url => () => Linking.openURL(url);
  return (
    <View style={styles.containerBanner}>
      <Swiper
        height={verticalScale(230)}
        paginationStyle={styles.paginationStyle}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        showsPagination={false}
        autoplay={true}>
        {data.map((dataBanner, index) => (
          <TouchableWithoutFeedback
            onPress={onPressBanner(dataBanner.url)}
            key={index}>
            <View style={styles.containerImage}>
              <Image
                resizeMode="cover"
                source={{uri: dataBanner.imageUrl}}
                style={styles.image}
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
    </View>
  );
};

Banner.defaultProps = {
  data: [],
};

Banner.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Banner;
