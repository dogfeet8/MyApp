import { HStack, Text } from '@gluestack-ui/themed';

interface Props {
  count: number;
}

export default function NumberBoard({ count }: Props) {
  return (
    <HStack justifyContent='center'>
      <Text size='6xl' bold={true} color='$orange700'>
        {count}
      </Text>
    </HStack>
  );
}
