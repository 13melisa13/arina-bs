import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout/Layout'
import IndexPage from './pages/index/IndexPage'
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Map from "./components/map/Map";
import Modal from "./components/modal/Modal";
import LoginPage from "./pages/login-form/LoginPage";
import ContentContainer from "./components/content-container/ContentContainer";

export const router =  createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
                {
                    path: '/',
                    element: <ContentContainer main={<IndexPage />} asideRight={<Map />} />,
                    children: [
                        {
                            path: 'login',
                            element: <LoginPage />
                        },
                    ]
                },

                {
                    path: '*',
                    element: <ContentContainer main={<NotFoundPage />} />,
                },
        ]
    },
]);
