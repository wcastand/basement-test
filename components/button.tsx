import styled from 'styled-components'

import { Buttons } from '../styled'

export type ButtonProps = {
	btnType?: Buttons
}

export const Button = styled.button<ButtonProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 9px 17px;
	border-radius: 6px;
	cursor: pointer;
	border: none;
	transition: all 0.15s ease-out;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

	${({ theme }) => theme.text.body};

	${({ theme, btnType }) => theme.buttons[btnType || 'transparent']};
`
export default Button
