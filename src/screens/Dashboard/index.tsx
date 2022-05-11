import React from 'react';
import { SafeAreaView } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransitionCard } from '../../components/TransitionCard';

import { TransitionProps } from '../../components/TransitionCard';

import {
  Container,
  Header,
  HeaderWrapper,
  User,
  Photo,
  UserInfo,
  UserGratting,
  UserName,
  Icon,
  HighlightCards,
  Transitions,
  TitleTransition,
  TransitionsList
} from './styles';

export interface TransitionsListProps extends TransitionProps {
  id: string;
}

const transitions = [
  {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Venda',
      icon: 'dollar-sign'
    },
    date: '13/04/2020'
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgueria Pizzy',
    amount: 'R$ 59,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: '10/04/2020'
  },
  {
    id: '3',
    type: 'negative',
    title: 'Aluguel do Apartamento',
    amount: 'R$ 2.000,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: '05/04/2020'
  }
] as TransitionsListProps[];

export function Dashboard() {
  return (
    <Container>
      <Header>
        <SafeAreaView>
          <HeaderWrapper>
            <User>
              <Photo
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/66283205?v=4'
                }}
              />
              <UserInfo>
                <UserGratting>Olá,</UserGratting>
                <UserName>Nivaldo</UserName>
              </UserInfo>
            </User>
            <Icon name="power" />
          </HeaderWrapper>
        </SafeAreaView>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransition="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransition="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransition="01 à 16 de abril"
        />
      </HighlightCards>

      <Transitions>
        <TitleTransition>Listagem</TitleTransition>
        <TransitionsList
          data={transitions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransitionCard data={item} />}
        />
      </Transitions>
    </Container>
  );
}
