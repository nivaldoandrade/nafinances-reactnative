import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from './style';

interface CategorySelectProps extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({ title, ...rest }: CategorySelectProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
