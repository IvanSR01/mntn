import { Container } from '@/shared/ui'
import { useCallback, type ReactNode } from 'react'
import styles from './Footer.module.scss'

const navigateDate = [
	{
		title: 'More on The Blog',
		links: [
			{
				name: 'About MNTN',
				href: '#',
			},
			{
				name: 'Contributors & Writers',
				href: '#',
			},
			{
				name: 'Write For Us',
				href: '#',
			},
			{
				name: 'Contact Us',
				href: '#',
			},
			{
				name: 'Privacy Policy',
				href: '#',
			},
		],
	},
	{
		title: 'More on MNTN',
		links: [
			{
				name: 'The Team',
				href: '#',
			},
			{
				name: 'Jobs',
				href: '#',
			},
			{
				name: 'Press',
				href: '#',
			},
			{
				name: 'Licenses',
				href: '#',
			},
		],
	},
]

export function Footer(): ReactNode {
	const renderLinkList = useCallback(
		(links: { name: string; href: string }[]) => (
			<div className={styles.linkList}>
				{links.map((link, i) => (
					<a key={'footer-link-' + i} className={styles.link} href={link.href}>
						{link.name}
					</a>
				))}
			</div>
		),
		[]
	)
	return (
		<Container as={'footer'} className={styles.footer}>
			<div className={styles.info}>
				<div className={styles.startBlock}>
					<h2 className={styles.title}>MNTN</h2>
					<p className={styles.description}>
						Get out there & discover your next slope, mountain & destination!
					</p>
				</div>
				<p className={styles.text}>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
			</div>
			{navigateDate.map((item, i) => (
				<div key={'footer-link-' + i} className={styles.navigate}>
					<h3 className={styles.title}>{item.title}</h3>
					{renderLinkList(item.links)}
				</div>
			))}
		</Container>
	)
}
