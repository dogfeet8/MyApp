import {
  Box,
  Button,
  ButtonIcon,
  Center,
  ChevronLeftIcon,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { DetailScreenParams, WebtoonDetail } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'expo-image';
import convertUrl from '../../utils/convertUrl';
import { Dimensions } from 'react-native';
import DetailInfo from './DetailInfo';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const fetchWebtoonDetail = async (titleId: number) => {
  const res = await fetch(`https://comic.naver.com/api/article/list/info?titleId=${titleId}`);
  return res.json();
};

const width = Dimensions.get('window').width;

interface DetailHeaderProps {
  titleId: number;
}

const DetailHeader = ({ titleId }: DetailHeaderProps) => {
  const navigation = useNavigation<NavigationProp<DetailScreenParams>>();
  const { data } = useQuery<WebtoonDetail>({
    queryKey: ['webToonDetail', titleId],
    queryFn: () => fetchWebtoonDetail(titleId),
    enabled: !!titleId,
  });

  if (!data) {
    return;
  }

  return (
    <VStack w='$full'>
      <Button
        position='absolute'
        top={35}
        left={8}
        zIndex={10}
        bg='#00000000'
        w={1}
        onPress={() => navigation.goBack()}
      >
        <ButtonIcon as={ChevronLeftIcon} size='xl' />
      </Button>
      <Box>
        <Box position='absolute' w={'$full'} h={width / 2} bg='$blueGray500'></Box>
        <Image
          contentFit='contain'
          source={{ uri: convertUrl(data.thumbnailUrl) }}
          style={{ width: width, height: width }}
        ></Image>
        <Center position='absolute' w='$full' bottom={12}>
          <Box bg='$green700' py={4} px={10} borderRadius='$full'>
            <Text color='white'>{`+관심 ${data.favoriteCount}`}</Text>
          </Box>
        </Center>
      </Box>
      <VStack px={20} py={10}>
        <Text size='lg' color='$white'>
          {data.titleName}
        </Text>
        <HStack gap='$2'>
          <Text size='md' color='$white'>
            {data.gfpAdCustomParam.displayAuthor}
          </Text>
          <Text size='md' color='$secondary400'>
            {`· ${data.publishDescription}`}
          </Text>
        </HStack>

        <DetailInfo webtoonDetail={data} />
      </VStack>
    </VStack>
  );
};

export default DetailHeader;
