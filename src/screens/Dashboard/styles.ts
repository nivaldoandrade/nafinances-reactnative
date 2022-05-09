import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';


export const Container = styled.View`
	flex: 1;
	background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
	font-family: ${({theme}) => theme.fonts.bold};
	font-size: 24px;
	color: ${({theme}) => theme.colors.title};
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFPercentage(36)}px;
	background-color: ${({theme}) => theme.colors.primary};

	padding: 0 24px;
`;

export const HeaderWrapper = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-top: 28px;
`;

export const User = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;

`;

export const Photo = styled.Image`
	width: ${RFValue(48)}px;
	height: ${RFValue(48)}px;

	border-radius: 10px;
`;

export const UserInfo = styled.View`
	margin-left: 17px;
`;

export const UserGratting = styled.Text`
	font-size: ${RFValue(18)}px;
	font-family: ${({theme}) => theme.fonts.regular};
	color: ${({theme}) => theme.colors.shape};
`;

export const UserName = styled.Text`
	font-size: ${RFValue(18)}px;
	font-family: ${({theme}) => theme.fonts.bold};
	color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
	font-size: ${RFValue(24)}px;
	color: ${({theme}) => theme.colors.secondary};
` as unknown as typeof Feather;