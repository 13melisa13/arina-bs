import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import IndexPage from '../pages/index/IndexPage'
import NotFoundPage from "../pages/not-found/NotFoundPage";

export const router = createBrowserRouter([
	{
		index: true,
		element: (
			<Layout>
				<IndexPage />
			</Layout>
		),
	},
	{
		path: '/login',
		element: <div>Login</div>,
	},
	{
		path: '/register',
		element: <div>Register</div>,
	},
	{
		path: '*',
		element:
			<Layout>
				<NotFoundPage />
			</Layout>,
	}

])
