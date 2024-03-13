import { Box, Text } from '@gluestack-ui/themed';
import { TripleWebtoon } from '../../types';
import { Image } from 'expo-image';
import convertUrl from '../../utils/convertUrl';

interface CarouselCardProps {
  webtoon: TripleWebtoon;
}
const CarouselCard = ({ webtoon }: CarouselCardProps) => {
  return (
    <Box w='$full' h='$full' justifyContent='flex-end' backgroundColor={`#${webtoon.bgColor}`}>
      <Box w='$full' h='$full' flex={1} justifyContent='flex-end' position='absolute'>
        <Image
          contentFit='contain'
          alt={webtoon.title}
          source={{
            uri: convertUrl(webtoon.bgImage),
          }}
          style={{ flex: 1, width: '100%', height: '100%' }}
        ></Image>
      </Box>
      <Box w='$full' h='$full' flex={1} justifyContent='flex-end' position='absolute'>
        <Image
          contentFit='contain'
          alt={webtoon.title}
          source={{
            uri: convertUrl(webtoon.backImage),
          }}
          style={{ flex: 1, width: '100%', height: '100%' }}
        ></Image>
      </Box>
      <Box w='$full' h='$full' flex={1} justifyContent='flex-end' position='absolute' z-index={1}>
        <Image
          transition={1000}
          contentFit='contain'
          alt={webtoon.title}
          source={{
            uri: convertUrl(webtoon.frontImage),
          }}
          style={{ flex: 1, width: '100%', height: '100%' }}
        ></Image>
      </Box>
      <Box marginBottom={15} marginLeft={20}>
        <Text color='$cyan900' size='xl' bold={true}>
          {webtoon.title}
        </Text>
        <Text color='$cyan900' size='md'>
          {webtoon.displayAuthor}
        </Text>
      </Box>
    </Box>
  );
};
export default CarouselCard;
