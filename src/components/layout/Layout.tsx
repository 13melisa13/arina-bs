import styles from './layout.module.scss'
import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";

type LayoutProps = {
	children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.layout}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
export default Layout
