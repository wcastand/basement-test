import styled from 'styled-components'
import { Colors, TextType } from '../styled'

export type TextProps = {
	type?: TextType
	color?: Colors
	align?: 'left' | 'center' | 'right'
}
const Text = styled.p<TextProps>`
	${({ type, theme }) => theme.text[type || 'body']};
	color: ${({ color, theme }) => theme.colors[color || 'black']};
	text-align: ${({ align }) => align || 'left'};
`

export default Text
