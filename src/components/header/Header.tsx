import styles from './header.module.scss'
import Logo from "../logo/Logo";
import React, {useEffect} from "react";
import {UIButton} from "../ui-button/UIButton";
import clsx from "clsx";
import {useLocation} from "react-router-dom";

export default function Header() {
	const [isMobile, setIsMobile] = React.useState(false);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
	}
	const location = useLocation();
	useEffect(() => {
		if (window.innerWidth <= 1024) {
			setIsMobile(true);
		}
		const resize = () => {
			if (window.innerWidth <= 1024) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		}
	}, [window.innerWidth]);

	return (
		<header className={styles.header}>


			<div
				className={
					clsx(
						styles.searchBox,
						styles.section,
					)
				}>
				<Logo/>
				<form className={styles.searchForm} onSubmit={handleSearch}>
					<input type='text' placeholder='Search' className={styles.searchInput}/>
					<UIButton
						type='submit'
						className={styles.searchButton}
						children={''}
						backgroundColor='transparent'
						title={'Поиск'}
						img='search'
					/>
				</form>
				<input type={"checkbox"} id={"menu"}
					   className={clsx(styles.menu)}
					   defaultChecked={isMenuOpen}
					   onChange={() => setIsMenuOpen(!isMenuOpen)}
				/>
				<label htmlFor={"menu"} className={clsx(styles.menuIconBox, styles.mobile)}>
					<span className={styles.menuIcon}></span>
				</label>
			</div>
			<div
				className={
					clsx(
						styles.section,
						isMenuOpen && styles.open,
						isMobile && styles.mobile
					)
				}>
				<UIButton
					to='/login'
					children='Услуги'

					backgroundColor= {isMobile ? 'transparent' : 'soft-pink'}
					color='main-black'
					paddingAside={isMobile ? 0 : 20}
					paddingTop={isMobile ? 0 : 20}
					state={{ from: location }}
				/>
				<UIButton
					children={!isMobile ? '' : 'Корзина'}
					to='/login'
					backgroundColor={isMobile ? 'transparent' : 'soft-pink'}
					color='main-black'
					paddingAside={isMobile ? 0 : 20}
					paddingTop={isMobile ? 0 : 20}
					img={!isMobile ? 'cart' : ''}
					title={'Корзина'}
					state={{ from: location }}
				/>
				<UIButton
					to='/login'
					children={'Войти'}
					color={isMobile ? 'main-black' : 'white'}
					backgroundColor={isMobile ? 'transparent' : 'dark-pink'}
					paddingAside={isMobile ? 0 : 30}
					paddingTop={isMobile ? 0 : 20}
					state={{ from: location }}

				/>

			</div>





		</header>
	)
}

