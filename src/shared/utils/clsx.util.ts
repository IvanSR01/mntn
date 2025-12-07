type ClsxProps =
	| string
	| {
			[key: string]: boolean
	  }
	| undefined

export function clsx(...rest: ClsxProps[]) {
	return rest
		.filter(Boolean)
		.map((item) => {
			if (typeof item === 'string') return item
			else if (typeof item === 'object')
				return Object.entries(item)
					.filter(([, value]) => value)
					.map(([key]) => key)
			return item
		})
		.join(' ')
}
