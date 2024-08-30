import styles from './layout.module.scss'
import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ContentContainer from "../content-container/ContentContainer";
import {Outlet} from "react-router-dom";

type LayoutProps = {
	header?: React.ReactNode,
	footer?: React.ReactNode,
	children?: React.ReactNode
}

function Layout({ children, header, footer}: LayoutProps) {
	return (
		<>
		<div className={styles.layout}>
			{header || <Header />}
			<Outlet />
			{children}
			{/*{ main || <Outlet />}*/}
			{footer || <Footer />}
		</div>

		</>
	)
}
export default Layout
