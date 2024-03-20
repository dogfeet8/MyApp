import { Center, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { DetailScreenParams, WeekdayWebtoon } from '../../types';
import { Image } from 'expo-image';
import convertUrl from '../../utils/convertUrl';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface WeekDayCardProps {
  webtoon: WeekdayWebtoon;
}

const width = Dimensions.get('window').width;

const WeekDayCard = ({ webtoon }: WeekDayCardProps) => {
  const navigation = useNavigation<NavigationProp<DetailScreenParams>>();
  return (
    <VStack w={width / 3}>
      <Pressable onPress={() => navigation.navigate('Detail', { titleId: webtoon.titleId })}>
        <Image
          transition={1000}
          source={{ uri: convertUrl(webtoon.thumbnailUrl) }}
          style={{ width: '100%', height: (width / 3) * 1.4 }}
        ></Image>
        <VStack position='absolute' p={4} gap={1}>
          {webtoon.new && (
            <Center w={24} h={24} bg='$green500' borderRadius='$full'>
              <Text color='$black' size='xs'>
                신작
              </Text>
            </Center>
          )}
          {webtoon.bm && (
            <Center w={24} h={24} bg='$black' borderRadius='$full' px={2} py={1}>
              <Icon size={22} name='timer-sharp' color='#22c55e'></Icon>
            </Center>
          )}
          {webtoon.adult && (
            <Center w={24} h={24} bg='$black' borderRadius='$full' px={2} py={1}>
              <Icon size={22} name='male-female-sharp' color='#991b1b'></Icon>
            </Center>
          )}
        </VStack>
        <VStack gap={-4} p={2}>
          <Text color='$white' size='sm' isTruncated={true}>
            {webtoon.titleName}
          </Text>
          <HStack alignItems='center'>
            <Text maxWidth={width / 3 - 30} color='$white' size='xs' isTruncated={true}>
              {webtoon.author}
            </Text>
            <Icon size={10} name='star-sharp' color='white'></Icon>
            <Text w={30} color='$white' size='xs'>
              {webtoon.starScore.toFixed(2)}
            </Text>
          </HStack>
        </VStack>
      </Pressable>
    </VStack>
  );
};

export default WeekDayCard;
