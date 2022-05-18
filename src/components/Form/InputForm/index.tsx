import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

// import {} from './styles';

interface InputFormProps extends TextInputProps {
  name: string;
  control: Control;
}

export function InputForm({ name, control, ...rest }: InputFormProps) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Input
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          {...rest}
        />
      )}
      name={name}
    />
  );
}
