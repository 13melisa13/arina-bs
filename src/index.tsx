import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/App'
import {store} from './services/store'
import {Provider} from 'react-redux'
import './styles/index.scss'
import './styles/variables.scss'
import './styles/font.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)

