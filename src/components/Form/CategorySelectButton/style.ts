import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity).attrs({
	activeOpacity: 0.7,
})`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.shape};
	border-radius: 5px;
	padding: 18px 16px;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`as unknown as typeof TouchableOpacity;

export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.regular};
 font-size: ${RFValue(14)}px;
 color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Feather)`
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.text};
`;