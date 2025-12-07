import type { ReactNode } from 'react'
import styles from './Header.module.scss'
import { Button, Container } from '@/shared/ui'
import Image from 'next/image'

const navigateDate = [
	{
		url: '&',
		title: 'Equipment',
	},
	{
		url: '&',
		title: 'About us',
	},
	{
		utl: '&',
		title: 'Blog',
	},
]

export function Header(): ReactNode {
	return (
		<Container as={'header'}>
			<div className={styles.header}>
				<h2 className={styles.logo}>MNTN</h2>
				<div className={styles.nav}>
					{navigateDate.map((item, i) => (
						<a key={'header-link-' + i} className={styles.link} href={item.url}>
							{item.title}
						</a>
					))}
				</div>
				<Button
					beforeIcon={
						<Image src="/cart.svg" alt="acc-icon" width={20} height={20} />
					}
					variant="text-only"
				>
					Account
				</Button>
			</div>
		</Container>
	)
}
