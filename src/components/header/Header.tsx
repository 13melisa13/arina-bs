import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'
import Logo from "../logo/Logo";
import React from "react";
import {UIButton} from "../button/UIButton";
import clsx from "clsx";

export default function Header() {
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
	}

	return (
		<header className={styles.header}>
			<div
				className={
				clsx(
					styles.searchBox,
					styles.section
				)
			}>
				<Logo />
				<form className={styles.searchForm} onSubmit={handleSearch}>
					<input type='text' placeholder='Search' className={styles.searchInput} />
					<UIButton
						type='submit'
						className={styles.searchButton}
						children={''}
						backgroundColor='main-white'
						title={'Поиск'}
						img='search'
					/>
				</form>
			</div>
			<div
				className={
				clsx(
					styles.section,
					styles.ikGroup
				)
				}>
				<UIButton
					to='/login'
					children='Услуги'
					backgroundColor='soft-pink'
					color='main-black'
					paddingAside={30}
					paddingTop={20}

				/>
				<UIButton
					children=''
					to='/login'
					backgroundColor='soft-pink'
					color='main-black'
					paddingAside={20}
					paddingTop={20}
					img='cart'
				/>
				<UIButton
					to='/login'
					children={'Войти'}
					color='white'
					backgroundColor='dark-pink'
					paddingAside={30}
					paddingTop={20}

				/>
			</div>
		</header>
	)
}

