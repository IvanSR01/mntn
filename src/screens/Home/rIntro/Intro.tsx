'use client'

import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import styles from './Intro.module.scss'
import { Header } from '@/components/Header/Header'
import { Button, Container, Heading, Loader } from '@/shared/ui'

export function Intro(): ReactNode {

	const [offsetY, setOffsetY] = useState(0)
	const [loadedCount, setLoadedCount] = useState(0)

	useEffect(() => {
		const onScroll = () => setOffsetY(window.scrollY)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const handleLoad = () => setLoadedCount((c) => c + 1)
	const allLoaded = loadedCount === 3

	return (
		<main className={styles.wrapper}>
			{!allLoaded && (
				<div className={styles.fullLoader}>
					<Loader />
				</div>
			)}

			<Header />

			<Image
				className={styles.bgBack}
				style={{ transform: `translateY(${offsetY * 0.1}px)` }}
				src="/HG (1).png"
				alt="mountains"
				width={2920}
				height={1080}
				onLoadingComplete={handleLoad}
			/>

			<Image
				className={styles.bgMid}
				style={{ transform: `translateY(${offsetY * 0.3}px)` }}
				src="/MG.png"
				alt="mountains"
				width={2920}
				height={1080}
				onLoadingComplete={handleLoad}
			/>

			<div
				className={styles.bgFrontContainer}
				style={{ transform: `translateY(${offsetY * 0.5}px)` }}
			>
				<Image
					className={styles.bgFront}
					src="/VG.png"
					alt="mountains"
					width={2920}
					height={1080}
					onLoadingComplete={handleLoad}
				/>
				<div className={styles.shadow} />
			</div>

			<Container className={styles.intro} as="section">
				<div className={styles.content}>
					<Heading text="A Hiking guide" />

					<h1 className={styles.title}>
						Be prepared for the Mountains and beyond!
					</h1>

					<Button
						variant="text-only"
						afterIcon={
							<Image
								src="/arrow_down.svg"
								alt="arrow-down-icon"
								width={16}
								height={24}
								style={{ marginLeft: 16 }}
							/>
						}
						onClick={() =>
							window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
						}
					>
						scroll down
					</Button>
				</div>
			</Container>
		</main>
	)
}
