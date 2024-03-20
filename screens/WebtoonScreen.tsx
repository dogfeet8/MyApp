import { Center, VStack } from '@gluestack-ui/themed';
import { Dimensions } from 'react-native';
import WebtoonCarousel from '../components/Carousel/WebtoonCarousel';
import { TabBar, TabView } from 'react-native-tab-view';
import { useState } from 'react';
import { DayArray } from '../constants';
import WeekDayList from '../components/WeekDay/WeekDayList';

export default function WebtoonScreen() {
  const [index, setIndex] = useState(0);

  return (
    <VStack width='$full' h='$full' bg='$backgroundDark900'>
      <Center width={Dimensions.get('window').width} height={250}>
        <WebtoonCarousel />
      </Center>
      <VStack flex={1}>
        <TabView
          style={{ height: Dimensions.get('window').height - 250 }}
          navigationState={{ index, routes: DayArray }}
          renderScene={({ route }) => {
            return <WeekDayList type={route.key} />;
          }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              labelStyle={{ color: 'white' }}
              activeColor='green'
              indicatorStyle={{ backgroundColor: 'green' }}
              style={{ backgroundColor: '$backgroundDark900' }}
            />
          )}
          onIndexChange={setIndex}
        />
      </VStack>
    </VStack>
  );
}
