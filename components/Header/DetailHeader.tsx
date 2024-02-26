import { Button, ButtonIcon, ChevronLeftIcon, HStack } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../../types';

export default function DetailHeader() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
    <HStack height={60} zIndex={10} position='absolute' justifyContent='center' ml={10}>
      <Button bg='#00000000' w={1} onPress={() => navigation.goBack()}>
        <ButtonIcon as={ChevronLeftIcon} size='xl' />
      </Button>
    </HStack>
  );
}
