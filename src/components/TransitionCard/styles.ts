import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
	type: 'positive' | 'negative';
}

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.shape};
	padding: 17px 24px;
	margin-bottom: 16px;
	border-radius: 5px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.title};
	margin-bottom: 2px;
`;

export const Amount = styled.Text<TypeProps>`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(20)}px;
	color: ${
		({ theme, type }) => type === 'positive' 
			? theme.colors.success 
			: theme.colors.attention
	};

	margin-bottom: 19px;
`;

export const Footer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Category = styled.View`
	flex-direction: row;
	align-items: center;
`;


export const Icon = styled(Feather)`
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text};
	margin-left: 12px;
`;

export const Date = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text};
`;
