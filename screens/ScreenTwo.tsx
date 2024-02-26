import { Button, Center, Text } from '@gluestack-ui/themed';
import { CounterScreensParams } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function ScreenTwo() {
  const navigation = useNavigation<NavigationProp<CounterScreensParams>>();
  return (
    <Center width='$full' height='$full' bg='$orange300' gap={10}>
      <Text>Screen Two</Text>
      <Button disabled={!navigation.canGoBack()} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Button onPress={() => navigation.navigate('ScreenOne')}>
        <Text>Go Screen 1</Text>
      </Button>
      <Button onPress={() => navigation.navigate('ScreenThree')}>
        <Text>Go Screen 3</Text>
      </Button>
    </Center>
  );
}
