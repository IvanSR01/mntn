import { clsx } from '@/shared/utils'
import type { PropsWithChildren, ElementType } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
	containerWidth?: string
	as?: ElementType
	className?: string
}

export function Container({
	containerWidth = '80%',
	as: Component = 'div',
	children,
	className
}: PropsWithChildren<ContainerProps>) {
	return (
		<Component className={clsx(styles.container)}>
			<div
				style={{
					width: containerWidth,
				}}
				className={className ?? ''}
			>
				{children}
			</div>
		</Component>
	)
}
