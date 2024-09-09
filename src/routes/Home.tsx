import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	)
}

export const HomeRoute = {
	path: '/',
	element: <Home />
}
