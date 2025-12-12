import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import styles from './Button.module.scss'
import { clsx } from '@/shared/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	beforeIcon?: ReactNode
	afterIcon?: ReactNode
	variant?: 'primary' | 'text-only'
	color?: 'default' | 'accent'
}

export function Button({
	children,
	beforeIcon,
	afterIcon,
	variant = 'primary',
	color = 'default',
	className,
	...otherProps
}: PropsWithChildren<ButtonProps>) {
	const buttonClassName = clsx(
		styles.button,
		{
			[styles.primary]: variant === 'primary',
			[styles.textOnly]: variant === 'text-only',
			[styles.defaultColor]: color === 'default',
			[styles.accent]: color === 'accent',
		},
		className
	)

	console.log(buttonClassName)
	return (
		<button className={buttonClassName} {...otherProps}>
			{beforeIcon}
			{children}
			{afterIcon}
		</button>
	)
}
