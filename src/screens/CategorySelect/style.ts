import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface CategoryItemProps {
	isActive: boolean;
}

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

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
	flex-direction: row;
	align-items: center;
	padding: ${RFValue(16)}px;

	background-color: ${({ theme, isActive }) => isActive ? theme.colors.secondary_light : 'transparent'};
`;

export const Icon = styled(Feather)`
	font-size: ${RFValue(20)}px;
	margin-right: 16px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
`;

export const Seperator = styled.View`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
	width: 100%;
	padding: 24px;
`;

