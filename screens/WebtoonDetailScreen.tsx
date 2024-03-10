import { Center, HStack, Icon, StarIcon, Text, VStack } from '@gluestack-ui/themed';
import { ScreensParams } from '../types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useEffect } from 'react';
import { useReadWebtoon } from '../hooks/useReadWebtoon';

type DetailScreenRouteProp = RouteProp<ScreensParams, 'Detail'>;

export default function WebtoonDetailScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const { add } = useReadWebtoon();
  const webtoon = route.params.webtoon;
  if (!webtoon) {
    return;
  }

  useEffect(() => {
    if (webtoon) {
      add(webtoon);
    }
  }, [webtoon]);

  return (
    <VStack width='$full' height='$full' bg='$backgroundDark900' gap={10}>
      <Center width='$full' height={300}>
        <Image
          source={webtoon.img}
          contentFit='contain'
          transition={2000}
          style={{ width: '100%', height: '100%' }}
        />
      </Center>
      <VStack px={20}>
        <Text color='$blueGray50' size='xl' bold={true}>
          {webtoon.title}
        </Text>
        <Text color='$blueGray300' size='lg' bold={true}>
          {webtoon.author}
        </Text>
        <HStack gap='$1'>
          <Icon
            as={StarIcon}
            size='lg'
            color='$yellow500'
            fill='$yellow300'
            mt='$1'
            ml='$0.5'
            $dark-color='$primary300'
          />
          <Text color='$blueGray300' size='lg' bold={true}>
            {webtoon.fanCount}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
