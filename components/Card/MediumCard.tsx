import {
  StarIcon,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  Pressable,
  Button,
  ButtonIcon,
  SearchIcon,
  CloseIcon,
} from '@gluestack-ui/themed';
import { ScreensParams, Webtoon } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface MediumCardProps {
  webtoon: Webtoon;
  showCloseButton?: boolean;
  onPressClose?: () => void;
}

const MediumCard = ({ webtoon, showCloseButton, onPressClose }: MediumCardProps) => {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
    <HStack borderWidth='$1' borderColor='$backgroundLight700'>
      {showCloseButton && (
        <Button
          position='absolute'
          right={0}
          top={0}
          size='md'
          zIndex={1}
          width={6}
          bg='#00000000'
          onPress={onPressClose}
        >
          <ButtonIcon as={CloseIcon} />
        </Button>
      )}
      <Pressable
        flexDirection='row'
        flex={1}
        onPress={() => navigation.navigate('Detail', { webtoon })}
      >
        <Image
          bg='$backgroundLight700'
          alt={webtoon.title}
          size='xl'
          source={{
            uri: webtoon.img,
          }}
        />
        <VStack justifyContent='center' pl='$5' gap='$1'>
          <Text color='$blueGray50' size='md' bold={true}>
            {webtoon.title}
          </Text>
          <Text color='$blueGray300' size='sm' bold={true}>
            {webtoon.author}
          </Text>
          <HStack gap='$1'>
            <Icon
              as={StarIcon}
              size='sm'
              color='$yellow500'
              fill='$yellow300'
              mt='$0.5'
              ml='$0.5'
              $dark-color='$primary300'
            />
            <Text color='$blueGray300' size='sm' bold={true}>
              {webtoon.fanCount}
            </Text>
          </HStack>
        </VStack>
      </Pressable>
    </HStack>
  );
};

export default MediumCard;
