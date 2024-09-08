import React, { Suspense, useMemo } from 'react'

import {
	Await,
	defer,
	Link,
	LoaderFunction,
	useLoaderData
} from 'react-router-dom'
import { getApiKey } from '../crypto'
import { getBaseUrl } from '../env'
import { generatePageNumbers } from '../util'

export default function Characters() {
	const characters = useLoaderData()

	const pageNumbers = useMemo(
		() => generatePageNumbers(characters.data.total, 1, 20),
		[characters.data.total]
	)

	return (
		<div>
			<h2>characters</h2>

			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={characters}>
					{(characters: any) => (
						<div>
							<ul>
								{characters.data.results.map(character => (
									<li key={character.id}>
										<Link to={`/character/${character.id}`}>
											{character.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</Await>
			</Suspense>
			<PageNumbers pageNumbers={pageNumbers} />
		</div>
	)
}

const loader: LoaderFunction = async ({ request }) => {
	const page = new URL(request.url).searchParams.get('page') || 0

	const offset = page ? (parseInt(page) - 1) * 20 : 0

	const url =
		getBaseUrl() + '/characters?apikey=' + getApiKey() + '&offset=' + offset

	const response = await fetch(url)
	const data = await response.json()

	return data
}

export const CharactersRoute = {
	path: 'characters',
	element: <Characters />,
	loader
}

export const PageNumbers = ({ pageNumbers }: { pageNumbers: number[] }) => {
	return (
		<ul className='flex flex-row flex-wrap'>
			{pageNumbers.map(num => (
				<li key={num} className='border-2 min-w-8 text-center'>
					<Link to={`/characters?page=${num}`}>{num}</Link>
				</li>
			))}
		</ul>
	)
}
