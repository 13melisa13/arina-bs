import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import IndexPage from '../pages/index/IndexPage'
import NotFoundPage from "../pages/not-found/NotFoundPage";
import Map from "../components/map/Map";

export const router = createBrowserRouter([
	{
		index: true,
		element: (
			<Layout main={<IndexPage />} asideRight={<Map />} />
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
			<Layout main={<NotFoundPage />} />
	}

])
