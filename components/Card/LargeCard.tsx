import { Box, Image, Text } from '@gluestack-ui/themed';
import { Webtoon } from '../../types';

interface LargeCardProps {
  webtoon: Webtoon;
}
const LargeCard = ({ webtoon }: LargeCardProps) => {
  return (
    <Box height='100%' width='100%' flex={1} key={webtoon.webtoonId} justifyContent='flex-end'>
      <Image
        alt={webtoon.title}
        position='absolute'
        size='full'
        source={{
          uri: webtoon.img,
        }}
      />

      <Box marginBottom={50} marginLeft={20}>
        <Text color='$blueGray50' size='xl' bold={true}>
          {webtoon.title}
        </Text>
        <Text color='$blueGray50' size='sm'>
          {webtoon.author}
        </Text>
      </Box>
    </Box>
  );
};

export default LargeCard;
