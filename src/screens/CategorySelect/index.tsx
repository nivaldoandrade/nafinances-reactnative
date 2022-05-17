import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  CategoryItem,
  Icon,
  Name,
  Seperator,
  Footer
} from './style';

export function CategorySelect() {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryItem>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Seperator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
}
