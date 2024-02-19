import { Center, ScrollView } from '@gluestack-ui/themed';
import { Dimensions } from 'react-native';
import WebToonSwiper from '../components/Header/WebToonSwiper';
import WebtoonList from '../components/List/WebtoonList';

export default function HomeScreen() {
  return (
    <ScrollView flex={1} width='$full' bg='$backgroundDark950'>
      <Center width={Dimensions.get('window').width} height={300} px='$5'>
        <WebToonSwiper />
      </Center>
      <WebtoonList />
    </ScrollView>
  );
}
