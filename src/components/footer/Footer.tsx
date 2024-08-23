import styles from './footer.module.scss'
import {UIButton} from "../button/UIButton";
import clsx from "clsx";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<nav className={styles.nav}>
				<UIButton to={'/'} children='О нас'
                    backgroundColor={'transparent'}/>
                <UIButton to={'/'} children='Пользовательское соглашение'
                    backgroundColor={'transparent'}/>
                <UIButton to={'/'} children='Политика конфиденциальности'
                    backgroundColor={'transparent'}/>
			</nav>
			<p className={clsx(styles.copy)}>&copy; 2024 Business-S4k@</p>
		</footer>
	)
}
