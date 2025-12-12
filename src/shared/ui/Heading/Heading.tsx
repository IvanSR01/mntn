import Image from 'next/image'
import styles from './Heading.module.scss'

interface HeadingProps {
	text: string
}

export function Heading({ text }: HeadingProps) {
	return (
		<div className={styles.wrapperHeading}>
			<Image
				src="/line.svg"
				alt="line-icon"
				width={72}
				height={2}
				className={styles.image}
			/>
			<h3 className={styles.heading}>{text}</h3>
		</div>
	)
}
