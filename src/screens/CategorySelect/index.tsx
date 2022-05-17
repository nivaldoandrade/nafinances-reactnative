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

interface CategoryProps {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: CategorySelectProps) {
  function handleSelectCategory(category: CategoryProps) {
    setCategory({ key: category.name, name: category.name });
  }

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
          <CategoryItem
            onPress={() => handleSelectCategory(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Seperator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
