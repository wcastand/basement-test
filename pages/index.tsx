import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import Text, { BarText } from '../components/text'
import Button, { GroupButton } from '../components/button'
import Form from '../components/form'
import setupAnimation from '../utils/setup'
import { Github, Twitter, Facebook, Logo } from '../components/icon'

const Container = styled.main`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	${up('md')} {
		grid-template-columns: 1fr 2fr;
	}
`

const Content = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	justify-content: flex-start;
	align-content: flex-start;
	gap: 24px;
	padding: 1rem;
	${up('md')} {
		padding: 4rem;
		min-width: 360px;
	}
`

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const stop = setupAnimation(containerRef)
		return () => stop()
	}, [containerRef])

	return (
		<Container>
			<Content>
				<Logo />
				<div>
					<Text
						type="headline"
						css={`
							padding-bottom: 8px;
						`}
					>
						Sign up to BaseGit
					</Text>
					<Text type="light" color="gray500">
						BaseGit is the best way to store information.
					</Text>
				</div>
				<div>
					<Text type="body" color="black">
						Continue with a provider
					</Text>
					<GroupButton>
						<Button>
							<Facebook />
						</Button>
						<Button>
							<Twitter />
						</Button>
						<Button>
							<Github />
						</Button>
					</GroupButton>
				</div>
				<BarText type="light" color="gray500" align="center">
					Or with your work email
				</BarText>
				<Form />
			</Content>
			<section
				ref={containerRef}
				css={`
					position: relative;
					display: none;
					${up('md')} {
						display: block;
					}
				`}
			/>
		</Container>
	)
}
