import { Box, Button, ButtonIcon, Center, ScrollView, SearchIcon } from '@gluestack-ui/themed';
import { Dimensions } from 'react-native';
import WebToonSwiper from '../components/Header/WebToonSwiper';
import WebtoonList from '../components/List/WebtoonList';
import { ScreensParams } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
    <ScrollView flex={1} width='$full' bg='$backgroundDark950'>
      <Box position='absolute' right={10} top={10} zIndex={10}>
        <Button
          borderRadius='$full'
          size='lg'
          p='$3.5'
          bg='#00000000'
          borderColor='$indigo600'
          onPress={() => navigation.navigate('Search')}
        >
          <ButtonIcon as={SearchIcon} />
        </Button>
      </Box>
      <Center width={Dimensions.get('window').width} height={300} px='$5'>
        <WebToonSwiper />
      </Center>
      <WebtoonList />
    </ScrollView>
  );
}
