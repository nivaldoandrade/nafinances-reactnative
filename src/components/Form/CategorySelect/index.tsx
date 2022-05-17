import React from 'react';

import { Container, Title, Icon } from './style';

interface CategorySelectProps {
  title: string;
}

export function CategorySelect({ title }: CategorySelectProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
