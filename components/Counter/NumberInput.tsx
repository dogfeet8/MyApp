import { Input, InputField, Text } from '@gluestack-ui/themed';
import { useState } from 'react';

interface Props {
  inputNumber: number;
  onChangeInputNumber: (inputCount: number) => void;
}

export default function NumberInput({ inputNumber, onChangeInputNumber }: Props) {
  const handleChangeInputNumber = (inputStr: string) => {
    const inputNumber = Number(inputStr);
    onChangeInputNumber(inputNumber);
  };

  return (
    <Input variant='outline' size='md' width={150}>
      <InputField
        value={`${inputNumber ? inputNumber : ''}`}
        textAlign='right'
        onChangeText={handleChangeInputNumber}
      />
    </Input>
  );
}
