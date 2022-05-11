import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryName,
  Icon,
  Date
} from './styles';

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransitionProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface TransitionCardProps {
  data: TransitionProps;
}

export function TransitionCard({ data }: TransitionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
