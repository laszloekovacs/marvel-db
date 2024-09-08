import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import { KeygenRoute } from './routes/Keygen'
import { HomeRoute } from './routes/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [KeygenRoute, HomeRoute]
	}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
