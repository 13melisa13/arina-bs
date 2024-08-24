import styles from './layout.module.scss'
import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ContentContainer from "../content-container/ContentContainer";

type LayoutProps = {
	main: React.ReactNode,
	asideLeft?: React.ReactNode | null,
	asideRight?: React.ReactNode | null
}

function Layout({main, asideLeft, asideRight}: LayoutProps) {
	return (
		<div className={styles.layout}>
			<Header />
			<ContentContainer main={main} asideLeft={asideLeft} asideRight={asideRight} />
			<Footer />
		</div>
	)
}
export default Layout
