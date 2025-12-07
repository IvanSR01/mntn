import { clsx } from '@/shared/utils'
import type { PropsWithChildren, ElementType } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
	containerWidth?: string
	as?: ElementType
}

export function Container({
	containerWidth = '80%',
	as: Component = 'div',
	children,
}: PropsWithChildren<ContainerProps>) {
	return (
		<Component className={clsx(styles.container)}>
			<div
				style={{
					width: containerWidth,
				}}
			>
				{children}
			</div>
		</Component>
	)
}
