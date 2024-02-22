import { HStack, Text } from '@gluestack-ui/themed';

interface Props {
  count: number;
  inputNumber: number;
}

export default function NumberPreview({ count, inputNumber }: Props) {
  return (
    <HStack alignItems='center' gap={100}>
      <Text size='3xl' bold={true} color='$red400'>
        {inputNumber ? count - inputNumber : count}
      </Text>
      <Text size='3xl' bold={true} color='$blue400'>
        {inputNumber ? count + inputNumber : count}
      </Text>
    </HStack>
  );
}
