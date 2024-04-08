import { Button, ButtonIcon, ChevronLeftIcon, HStack, SafeAreaView } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../../types';

interface HeaderProps {
  color: string;
}
export default function Header({ color }: HeaderProps) {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
    <HStack height={80} justifyContent='center' position='absolute' alignItems='flex-end'>
      <Button bg='#00000000' w={1} onPress={() => navigation.goBack()}>
        <ButtonIcon color={color} as={ChevronLeftIcon} size='xl' />
      </Button>
    </HStack>
  );
}
