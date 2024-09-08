import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import { KeygenRoute } from './routes/Keygen'
import { HomeRoute } from './routes/Home'
import { CharactersRoute } from './routes/Characters'
import { CharacterRoute } from './routes/Character'
import { ComicsRoute } from './routes/Comics'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			KeygenRoute,
			HomeRoute,
			CharactersRoute,
			CharacterRoute,
			ComicsRoute
		]
	}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
