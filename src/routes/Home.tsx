import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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

export default Home
