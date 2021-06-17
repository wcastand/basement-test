import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import Text from '../components/text'
import Button from '../components/button'
import Form from '../components/form'
import setupAnimation from '../utils/setup'
import { Github, Twitter, Facebook, Logo } from '../components/icon'

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

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const stop = setupAnimation(containerRef)
		return () => stop()
	}, [containerRef])
	return (
		<main
			css={`
				min-height: 100vh;
				display: grid;
				grid-template-columns: 1fr;
				${up('md')} {
					grid-template-columns: 1fr 2fr;
				}
			`}
		>
			<section
				css={`
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
				`}
			>
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
					<div
						css={`
							display: grid;
							grid-template-columns: repeat(3, 1fr);
							justify-items: stretch;
							align-items: center;
							gap: 12px;
							padding-top: 4px;
						`}
					>
						<Button>
							<Facebook />
						</Button>
						<Button>
							<Twitter />
						</Button>
						<Button>
							<Github />
						</Button>
					</div>
				</div>
				<Bar>
					<Text
						type="light"
						color="gray500"
						align="center"
						css={`
							background-color: white;
							padding: 0 8px;
						`}
					>
						Or with your work email
					</Text>
				</Bar>
				<Form />
			</section>
			<section
				ref={containerRef}
				css={`
					position: relative;
					display: none;
					${up('md')} {
						display: block;
					}
				`}
			>
				{/* <Image src={rocket} alt="rocket" layout="fill" objectFit="cover" /> */}
			</section>
		</main>
	)
}
