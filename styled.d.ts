// import original module declarations
import 'styled-components'
import type {} from 'styled-components/cssprop'

export type Colors = 'black' | 'white' | 'gray100' | 'gray500' | 'gray700' | 'red'
export type TextType = 'body' | 'headline' | 'light'
export type Buttons = 'transparent' | 'black'
export type Sizes = 'normal'

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: { [color in Colors]: string }
		text: { [type in TextType]: any }
		sizes: { [size in Sizes]: number }
		buttons: { [button in Buttons]: any }
	}
}
