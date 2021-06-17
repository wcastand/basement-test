import { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
${reset}
	body{
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.5;
	}
`
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
