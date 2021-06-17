import { Colors, TextType, Sizes, Buttons } from './styled'

export type Theme = {
	colors: { [color in Colors]: string }
	text: { [type in TextType]: any }
	sizes: { [size in Sizes]: number }
	buttons: { [button in Buttons]: any }
}

const colors = {
	black: '#000',
	white: '#fff',
	gray100: '#D1D5DB',
	gray500: '#6B7280',
	gray700: '#374151',
	red: '#FE4365',
}

export const theme: Theme = {
	colors,
	sizes: { normal: 20 },
	buttons: {
		transparent: {
			background: colors.white,
			border: '1px solid #d1d5db',
			'&:hover': {
				boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
			},
		},
		black: {
			background: colors.black,
			border: `1px solid ${colors.white}`,
			color: colors.white,
			'&:hover': {
				background: colors.white,
				color: colors.black,
				border: `1px solid ${colors.black}`,
			},
		},
	},
	text: {
		body: {
			fontSize: '14px',
			fontWeight: '500',
			lineHeight: '20px',
		},
		headline: {
			fontSize: '30px',
			fontWeight: '800',
			lineHeight: '36px',
		},
		light: {
			fontSize: '14px',
			fontWeight: '400',
			lineHeight: '20px',
		},
	},
}

export default theme
