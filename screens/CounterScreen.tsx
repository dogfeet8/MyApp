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
import NumberBoard from '../components/Counter/NumberBoard';
import NumberInput from '../components/Counter/NumberInput';
import CounterButton from '../components/Counter/CounterButton';
import NumberPreview from '../components/Counter/NumberPreview';

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

  const handleChangeInputNumber = (inputNumber: number) => {
    if (inputNumber) {
      setInputNumber(inputNumber);
    } else {
      setInputNumber(0);
    }
  };

  return (
    <Center width='$full' height='$full' bg='$blue300' gap={100}>
      <Text size='4xl' bold={true}>
        This is My Counter
      </Text>
      <NumberBoard count={count} />
      <VStack gap={30} alignItems='center'>
        <NumberInput inputNumber={inputNumber} onChangeInputNumber={handleChangeInputNumber} />
        <HStack justifyContent='center' gap={30}>
          <CounterButton type='MINUS' onClick={handleMinus} />
          <CounterButton type='PLUS' onClick={handleAdd} />
        </HStack>
        <NumberPreview count={count} inputNumber={inputNumber} />
      </VStack>
    </Center>
  );
}
