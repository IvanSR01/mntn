'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import styles from './Intro.module.scss'
import { Header } from '@/components/Header/Header'

export function Intro(): ReactNode {
	const [offsetY, setOffsetY] = useState(0)

	const handleScroll = useCallback(() => {
		setOffsetY(window.scrollY)
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	return (
		<div className={styles.wrapper}>
			<Header />
			<Image
				className={styles.bgBack}
				style={{ transform: `translateY(${offsetY * 0.1}px)` }}
				src="/HG (1).png"
				alt="mountains"
				width={2920}
				height={1080}
			/>

			<Image
				className={styles.bgMid}
				style={{ transform: `translateY(${offsetY * 0.3}px)` }}
				src="/MG.png"
				alt="mountains"
				width={2920}
				height={1080}
			/>

			<Image
				className={styles.bgFront}
				style={{ transform: `translateY(${offsetY * 0.5}px)` }}
				src="/VG.png"
				alt="mountains"
				width={2920}
				height={1080}
			/>
		</div>
	)
}
