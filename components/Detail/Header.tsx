import { Button, ButtonIcon, ChevronLeftIcon, HStack, SafeAreaView } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../../types';

export default function Header() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
    <HStack height={80} justifyContent='center' position='absolute' alignItems='flex-end'>
      <Button bg='#00000000' w={1} onPress={() => navigation.goBack()}>
        <ButtonIcon as={ChevronLeftIcon} size='xl' />
      </Button>
    </HStack>
  );
}
