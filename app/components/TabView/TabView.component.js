import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './TabView.style';
import TabBar from '../TabBar/TabBar.component';

const TabView = ({navigationState, onIndexChange, renderScene}) => {
  const {index, routes} = navigationState;

  const onPressRoute = indexRoute => () => onIndexChange(indexRoute);

  return (
    <View>
      <View style={styles.containerListTabBar}>
        {routes.map((route, indexRoute) => (
          <TabBar
            onPress={onPressRoute(indexRoute)}
            isSelected={index === indexRoute}
            data={route}
            key={route.key}
          />
        ))}
      </View>
      {renderScene({routeTab: routes[index]})}
    </View>
  );
};

TabView.defaultProps = {
  navigationState: {
    index: 0,
    routes: [],
  },
  onIndexChange: () => {},
};

TabView.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }),
  onIndexChange: PropTypes.func,
};

export default TabView;
