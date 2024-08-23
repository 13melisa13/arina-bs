import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/App'
import './styles/index.scss'
import './styles/variables.scss'
import './styles/font.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)

