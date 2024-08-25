import React from 'react'
import {createBrowserRouter, useMatch} from 'react-router-dom'
import Layout from '../components/layout/Layout'
import IndexPage from '../pages/index/IndexPage'
import NotFoundPage from "../pages/not-found/NotFoundPage";
import Map from "../components/map/Map";
import Modal from "../components/modal/Modal";
import LoginForm from "../pages/login-form/LoginForm";

export const router = createBrowserRouter([
	{
		index: true,
		element: (
			<Layout main={<IndexPage />} asideRight={<Map />} />
		),
	},
	{
		path: '/login',
		element: <Modal children={<LoginForm />} onClick={() => {}}/>,

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
