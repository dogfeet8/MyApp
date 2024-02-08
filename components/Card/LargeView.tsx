import { Box, Center, HStack, Image, Text, VStack } from '@gluestack-ui/themed';
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';
import { Webtoon } from '../../types';

interface LargeViewProp {
  webtoon: Webtoon;
}

export default function LargeView({ webtoon }: LargeViewProp) {
  return (
    <VStack
      width={Dimensions.get('window').width}
      height='100%'
      justifyContent='flex-end'
      alignItems='center'
      pl={30}
      pb={45}
    >
      <Image
        position='absolute'
        alt='webtoon'
        size='full'
        source={{
          uri: webtoon.img,
        }}
      />

      <Text size='xl' color='$white' fontWeight='$bold'>
        {webtoon.author}
      </Text>
      <Text size='md' color='$white' fontWeight='$bold'>
        {webtoon.title}
      </Text>
    </VStack>
  );
}
