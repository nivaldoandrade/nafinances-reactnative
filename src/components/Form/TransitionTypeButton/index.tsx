import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

interface TransitionTypeButtonProps extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: 'income' | 'outcome';
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
};

export function TransitionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: TransitionTypeButtonProps) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
