import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CounterScreensParams } from '../types';

export default function ScreenOne() {
  const navigation = useNavigation<NavigationProp<CounterScreensParams>>();

  return (
    <Center width='$full' height='$full' bg='$blue300' gap={10}>
      <Text>Screen One</Text>
      <Button disabled={!navigation.canGoBack()} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Button onPress={() => navigation.navigate('ScreenTwo')}>
        <Text>Go Screen 2</Text>
      </Button>
      <Button onPress={() => navigation.navigate('ScreenThree')}>
        <Text>Go Screen 3</Text>
      </Button>
    </Center>
  );
}
