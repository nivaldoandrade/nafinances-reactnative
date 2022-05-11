import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';

import {TransitionsListProps} from '.';


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
	height: ${RFPercentage(40)}px;
	background-color: ${({theme}) => theme.colors.primary};

	padding: 0 24px;
`;

export const HeaderWrapper = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-top: ${RFValue(28)}px;
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
`;

export const HighlightCards = styled.ScrollView.attrs({
	horizontal: true,
	contentContainerStyle: { paddingHorizontal: 24},
	showsHorizontalScrollIndicator: false,
})`
	position: absolute;
	top: ${RFPercentage(20)}px;
`;

export const Transitions = styled.View`
	flex: 1;
	padding: 0 24px;
	margin-top: ${RFPercentage(11)}px;
`;

export const TitleTransition = styled.Text`
	font-size: ${RFValue(18)}px;
	color: ${({theme}) => theme.colors.text_dark};
	margin-bottom: 17px;
`;

export const TransitionsList = styled(FlatList as new () => FlatList<TransitionsListProps>).attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		paddingBottom: getBottomSpace()
	}
})``;