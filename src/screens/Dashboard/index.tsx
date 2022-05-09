import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  Container,
  Header,
  HeaderWrapper,
  User,
  Photo,
  UserInfo,
  UserGratting,
  UserName,
  Icon
} from './styles';

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
    </Container>
  );
}
