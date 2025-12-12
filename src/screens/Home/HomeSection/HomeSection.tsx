import Image from 'next/image'
import styles from './HomeSection.module.scss'
import { Button, Container, Heading } from '@/shared/ui'
import { clsx } from '@/shared/utils'

export interface HomeSectionProps {
	numiratic: string
	tag: string
	heading: string
	description: string
	image: string
	imagePosition?: 'left' | 'right'
	className?: string
}

export function HomeSection({
	numiratic,
	tag,
	heading,
	description,
	image,
	imagePosition = 'left',
	className
}: HomeSectionProps) {
	return (
		<Container
			as={'section'}
			className={clsx(styles.homeSection, styles[imagePosition], className)}
		>
			<div className={styles.info}>
				<Image
					className={styles.numiratic}
					src={numiratic}
					alt={tag}
					width={263}
					height={240}
				/>
				<Heading text={tag} />
				<h2 className={styles.heading}>{heading}</h2>
				<p className={styles.description}>{description}</p>
				<Button
					variant="text-only"
					color="accent"
					afterIcon={
						<Image
							src="/arrow_right.png"
							alt="arrow-right-icon"
							width={20}
							height={20}
						/>
					}
				>
					read more
				</Button>
			</div>
			<Image
				className={styles.image}
				src={image}
				alt={tag}
				width={566}
				height={720}
			/>
		</Container>
	)
}
