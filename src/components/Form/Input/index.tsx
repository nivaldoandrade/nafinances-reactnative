import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './style';

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  return <Container {...rest} />;
}
