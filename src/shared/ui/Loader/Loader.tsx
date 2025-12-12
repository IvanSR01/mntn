import styles from './Loader.module.scss'

export function Loader() {
	return (
		<div className={styles.threeBody}>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
		</div>
	)
}
