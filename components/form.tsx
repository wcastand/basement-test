import { useForm, SubmitHandler } from 'react-hook-form'

import Button from './button'
import Input from './input'

interface IFormInput {
	email: string
	password: string
	confirmedPassword: string
}

const Form: React.FC<{}> = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<IFormInput>({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
	})

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		window.localStorage.setItem('email', data.email)
		window.localStorage.setItem('password', data.password)
	}

	return (
		<form
			css={`
				display: grid;
				grid-template-columns: 1fr;
				gap: 24px;
			`}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="email"
				label="Email address"
				id="email"
				errors={errors.email}
				placeholder="test@basegit.io"
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value:
							/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: 'Must be a valid email',
					},
					maxLength: { value: 64, message: 'Email cannot be longer than 64' },
				})}
			/>
			<Input
				type="password"
				id="password"
				label="Password"
				errors={errors.password}
				{...register('password', {
					minLength: { value: 6, message: 'Must be at least 6 characters long' },
					validate: {
						shouldHaveAtLeastOneNumber: (value) => value.search(/\d+/) !== -1 || 'Must contain at least one number',
						shouldHaveAtLeastOneLowercaseLetter: (value) => value.search(/[a-z]+/) !== -1 || 'Must contain at least one lowercase char',
						shouldHaveAtLeastOneUppercaseLetter: (value) => value.search(/[A-Z]+/) !== -1 || 'Must contain at least one uppercase char',
					},
					required: 'Password is required',
				})}
			/>
			<Input
				type="password"
				label="Confirm password"
				id="Confirm password"
				errors={errors.confirmedPassword}
				{...register('confirmedPassword', {
					required: 'Please confirm your password',
					validate: {
						matchesPreviousPassword: (value) => {
							const { password } = getValues()
							return password === value || 'Passwords should match!'
						},
					},
				})}
			/>
			<Button type="submit" btnType="black">
				Sign up
			</Button>
		</form>
	)
}

export default Form
