import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import { TransitionTypeButton } from '../../components/Form/TransitionTypeButton';
import { CategorySelect } from '../CategorySelect';

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
  const [isOpenModalCategory, setIsOpenModalCategory] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransitionTypeSelect(type: 'up' | 'down') {
    console.log(type);
    setTransitionType(type);
  }

  function handleCloseCategorySelectModal() {
    setIsOpenModalCategory(false);
  }

  function handleOpenCategorySelectModal() {
    setIsOpenModalCategory(true);
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
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenCategorySelectModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>
      <Modal animationType="slide" visible={isOpenModalCategory}>
        <CategorySelect
          category={category}
          closeSelectCategory={handleCloseCategorySelectModal}
          setCategory={setCategory}
        />
      </Modal>
    </Container>
  );
}
