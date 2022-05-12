import styled, {css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import {rgba} from 'polished';

interface IconType {
	type: 'up' | 'down';
}

interface ContainerProps {
	isActive: boolean;
	type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
	width: 48%;	
	border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
	border-style: solid;
	border-color: ${({ theme }) => rgba(theme.colors.text, 0.2)};
	border-radius: 5px;

	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 16px 32px;
	margin-top: 8px;

	${({ theme, type, isActive }) => isActive && type === 'up' && css`
		background-color: ${theme.colors.success_light};
	`}

	${({ theme, type, isActive }) => isActive && type === 'down' && css`
		background-color: ${theme.colors.attention_light};
	`}
	
`;

export const Icon = styled(Feather)<IconType>`
	font-size: ${RFValue(24)}px;
	color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention}
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.title};
	margin-left: 14px;
`;
