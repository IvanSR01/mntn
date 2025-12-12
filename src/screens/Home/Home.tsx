'use client'
import type { HomeSectionProps } from './HomeSection/HomeSection'
import { Intro } from './Intro/Intro'
import styles from './Home.module.scss'
import dynamic from 'next/dynamic'
import { Footer } from '@/components/Footer/Footer'

const HomeSection = dynamic(
	() => import('./HomeSection/HomeSection').then((mod) => mod.HomeSection),
	{ ssr: false }
)

const sections: HomeSectionProps[] = [
	{
		numiratic: '/N01.png',
		tag: 'GET STARTED',
		heading: 'What level of  hiker are you?',
		description:
			'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ',
		image: '/01.png',
	},
	{
		numiratic: '/N02.png',
		tag: 'Hiking Essentials',
		heading: 'Picking the right Hiking Gear!',
		description:
			'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
		image: '/02.png',
		imagePosition: 'right',
	},
	{
		numiratic: '/N03.png',
		tag: 'where you go is the key',
		heading: 'Understand Your Map & Timing',
		description:
			'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction...',
		image: '/03.png',
	},
]

export function Home() {
	return (
		<main>
			<Intro />
			<div className={styles.container}>
				{sections.map((section, index) => (
					<HomeSection className={styles.section} key={index} {...section} />
				))}
			</div>
			<Footer />
		</main>
	)
}
