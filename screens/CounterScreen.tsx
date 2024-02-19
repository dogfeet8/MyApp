import {
  AddIcon,
  Button,
  ButtonIcon,
  Center,
  HStack,
  Input,
  InputField,
  RemoveIcon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useState } from 'react';

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);

  const handleAdd = () => {
    setCount(count + inputNumber);
    setInputNumber(0);
  };

  const handleMinus = () => {
    setCount(count - inputNumber);
    setInputNumber(0);
  };

  const handleChangeInputNumber = (inputStr: string) => {
    const inputNumber = Number(inputStr);
    if (inputNumber) {
      setInputNumber(inputNumber);
    }
  };

  return (
    <>
      <Center width='$full' height='$full' bg='$blue300' gap={100}>
        <Text size='4xl' bold={true}>
          This is My Counter
        </Text>
        <Text size='6xl' bold={true} color='$orange700'>
          {count}
        </Text>
        <VStack gap={30} alignItems='center'>
          <Input variant='outline' size='md' width={150}>
            <InputField
              value={`${inputNumber ? inputNumber : ''}`}
              textAlign='right'
              onChangeText={handleChangeInputNumber}
            />
          </Input>
          <HStack justifyContent='center' gap={30}>
            <Button size='xl' action='negative' onPress={handleMinus}>
              <ButtonIcon size='xl' as={RemoveIcon} />
            </Button>
            <Button size='xl' action='positive' onPress={handleAdd}>
              <ButtonIcon size='xl' as={AddIcon} />
            </Button>
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
