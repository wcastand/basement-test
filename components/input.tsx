import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'

import Text from './text'

export type InputProps = {
	label: string
	id: string
	errors?: FieldError | undefined
} & InputHTMLAttributes<HTMLInputElement>

const InputBase = styled.input`
	background: #ffffff;
	border: 1px solid ${({ theme }) => theme.colors.gray100};
	box-sizing: border-box;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 6px;
	padding: 9px 13px;
	margin-top: 4px;
`

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ id, label, errors, ...props }, ref) => {
	return (
		<div
			css={`
				display: flex;
				flex-direction: column;
			`}
		>
			<div
				css={`
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					flex-direction: column;
					${up('md')} {
						flex-direction: row;
						justify-content: space-between;
					}
				`}
			>
				<Text as="label" type="body" color="gray700" htmlFor={id}>
					{label}
				</Text>
				<Text
					type="light"
					color="red"
					role="alert"
					css={`
						display: none;
						${up('md')} {
							display: block;
						}
					`}
				>
					{errors?.message}
				</Text>
			</div>
			<InputBase id={id} ref={ref} aria-invalid={errors ? 'true' : 'false'} {...props} />
			<Text
				type="light"
				color="red"
				role="alert"
				css={`
					min-height: 1.5rem;
					display: block;
					padding-top: 4px;
					${up('md')} {
						display: none;
					}
				`}
			>
				{errors?.message}
			</Text>
		</div>
	)
}

export default forwardRef(Input)
