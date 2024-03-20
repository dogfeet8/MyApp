import { Center, HStack, Text, VStack } from '@gluestack-ui/themed';
import { WeekdayWebtoon } from '../../types';
import { Dimensions } from 'react-native';
import { Image } from 'expo-image';
import convertUrl from '../../utils/convertUrl';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurHash } from '../../constants';

interface WeekDayCardProps {
  webtoon: WeekdayWebtoon;
}

const width = Dimensions.get('window').width / 3;

const WeekdayCard = ({ webtoon }: WeekDayCardProps) => {
  return (
    <VStack w={width} height={width * 1.5} p='$1'>
      <Image
        transition={500}
        alt={webtoon.titleName}
        source={{
          uri: convertUrl(webtoon.thumbnailUrl),
        }}
        style={{ flex: 1, width: '100%' }}
        placeholder={BlurHash}
      ></Image>
      <VStack position='absolute' top={6} left={6} gap='$1'>
        {/* 신작 */}
        {webtoon.new && (
          <Center h={24} w={24} borderRadius='$full' bg='$green500'>
            <Text color='black' size='xs'>
              신작
            </Text>
          </Center>
        )}
        {webtoon.bm && (
          <Center h={24} w={24} borderRadius='$full' bg='black' px={2}>
            <Icon size={22} name='timer-sharp' color='#22c55e'></Icon>
          </Center>
        )}
        {webtoon.adult && (
          <Center h={24} w={24} borderRadius='$full' bg='black' px={2}>
            <Icon size={22} name='male-female-sharp' color='#991b1b'></Icon>
          </Center>
        )}
      </VStack>

      <VStack gap={-4}>
        <Text color='white' size='sm' isTruncated={true}>
          {webtoon.titleName}
        </Text>
        <HStack alignItems='center'>
          <Text color='white' size='xs' maxWidth={width - 40} isTruncated={true}>
            {webtoon.author}
          </Text>
          <Icon size={10} name='star-sharp' color='white' style={{ marginBottom: 2 }}></Icon>
          <Text color='white' size='xs' isTruncated={true}>
            {webtoon.starScore.toFixed(2)}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default WeekdayCard;
