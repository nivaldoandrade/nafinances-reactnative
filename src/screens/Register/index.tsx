import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { CategorySelect } from '../../components/Form/CategorySelect';
import { Input } from '../../components/Form/Input';
import { TransitionTypeButton } from '../../components/Form/TransitionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransitionTypeButtons
} from './styles';

export function Register() {
  const [transitionType, setTransitionType] = useState('');

  function handleTransitionTypeSelect(type: 'up' | 'down') {
    console.log(type);
    setTransitionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransitionTypeButtons>
            <TransitionTypeButton
              type="up"
              title="income"
              onPress={() => handleTransitionTypeSelect('up')}
              isActive={transitionType === 'up'}
            />
            <TransitionTypeButton
              type="down"
              title="outcome"
              onPress={() => handleTransitionTypeSelect('down')}
              isActive={transitionType === 'down'}
            />
          </TransitionTypeButtons>
          <CategorySelect title="Category" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
