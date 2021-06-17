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

const ErrorMsg = styled(Text).attrs({
	type: 'light',
	color: 'red',
	role: 'alert',
})`
	min-height: 1.5rem;
	display: block;
	padding-top: 4px;
	${up('md')} {
		display: none;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	${up('md')} {
		flex-direction: row;
		justify-content: space-between;
	}
`

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ id, label, errors, ...props }, ref) => {
	return (
		<Wrapper>
			<Container>
				<Text as="label" type="body" color="gray700" htmlFor={id}>
					{label}
				</Text>
				<ErrorMsg
					css={`
						display: none;
						${up('md')} {
							display: block;
						}
					`}
				>
					{errors?.message}
				</ErrorMsg>
			</Container>
			<InputBase id={id} ref={ref} aria-invalid={errors ? 'true' : 'false'} {...props} />
			<ErrorMsg>{errors?.message}</ErrorMsg>
		</Wrapper>
	)
}

export default forwardRef(Input)
