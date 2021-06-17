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

const Bar = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	::before {
		content: '';
		position: absolute;
		top: 9.5px;
		left: 0px;
		height: 1px;
		width: 100%;
		z-index: -1;
		background-color: ${({ theme }) => theme.colors.gray100};
	}
`

export const BarText: React.FC<TextProps> = (props) => (
	<Bar>
		<Text
			{...props}
			css={`
				background-color: white;
				padding: 0 8px;
			`}
		/>
	</Bar>
)

export default Text
