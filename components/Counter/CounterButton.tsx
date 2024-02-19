import { AddIcon, Button, ButtonIcon, RemoveIcon } from '@gluestack-ui/themed';

interface Props {
  type: 'PLUS' | 'MINUS';
  onClick: () => void;
}

export default function CounterButton({ type, onClick }: Props) {
  return (
    <Button size='xl' action={type === 'PLUS' ? 'positive' : 'negative'} onPress={onClick}>
      <ButtonIcon size='xl' as={type === 'PLUS' ? AddIcon : RemoveIcon} />
    </Button>
  );
}
