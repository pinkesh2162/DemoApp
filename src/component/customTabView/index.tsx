import React from 'react';
import {TabView, TabBar, TabBarIndicator, Route} from 'react-native-tab-view';
import {useWindowDimensions} from 'react-native';
import {CustomTabViewProps} from '../../types';
import {black, textGrey} from '../../constants';

const CustomTabView: React.FC<CustomTabViewProps> = ({
  routes,
  renderScenes,
  initialIndex = 0,
  styles,
}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(initialIndex);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled={true}
      renderIndicator={indicatorProps => {
        const width = indicatorProps.getTabWidth(index) - 30;
        return <TabBarIndicator {...indicatorProps} width={width} />;
      }}
      indicatorStyle={styles.tabIndicatorStyle}
      style={styles.tabBarStyle}
      tabStyle={styles.tabBarSubStyle}
      labelStyle={styles.tabTextStyle}
      pressColor="white"
      activeColor={black}
      inactiveColor={textGrey}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={({route}) => renderScenes(route.key)}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};

export default CustomTabView;
