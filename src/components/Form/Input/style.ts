import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TextInput).attrs(((props) => ({
	placeholderTextColor: props.theme.colors.text_light,
})))`
	width: 100%;
	padding: 18px 16px;
	margin-bottom: 8px;
	background-color: ${({ theme }) => theme.colors.shape};

	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text_dark};

`as unknown as typeof TextInput;