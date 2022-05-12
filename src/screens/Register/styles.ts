import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	flex: 1;
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFValue(113)}px;
	background-color: ${({ theme }) => theme.colors.primary};
	align-items: center;
	justify-content: flex-end;
	padding-bottom: 19px;
`;

export const Title= styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled.View`
	flex: 1;
	width: 100%;
	padding: 24px;
	background-color: ${({ theme }) => theme.colors.background};
	justify-content: space-between;

`;

export const Fields = styled.View``;

export const TransitionTypeButtons = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;