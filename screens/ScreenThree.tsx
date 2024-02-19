import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../types';

export default function ScreenThree() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();

  return (
    <Center width='$full' height='$full' bg='$red300' gap={10}>
      <Text>Screen Three</Text>
      <Button disabled={!navigation.canGoBack()} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Button onPress={() => navigation.navigate('ScreenOne')}>
        <Text>Go Screen 1</Text>
      </Button>
      <Button onPress={() => navigation.navigate('ScreenTwo')}>
        <Text>Go Screen 2</Text>
      </Button>
    </Center>
  );
}
