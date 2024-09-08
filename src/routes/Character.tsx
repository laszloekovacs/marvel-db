import {
	Await,
	defer,
	LoaderFunction,
	useLoaderData,
	useParams
} from 'react-router-dom'
import { getApiKey } from '../crypto'
import { getBaseUrl } from '../env'
import { Suspense } from 'react'

export default function Character() {
	const hero = useLoaderData()

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={hero}>
				{(hero: any) => (
					<div>
						<h2>Character Name {hero.name}</h2>
						<p>Character Id: {hero.id}</p>
						<p>{hero.description}</p>
						<img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} />
					</div>
				)}
			</Await>
		</Suspense>
	)
}

const loader: LoaderFunction = async ({ params }) => {
	const id = params.id
	const url = getBaseUrl() + '/characters/' + id + '?apikey=' + getApiKey()

	const response = await fetch(url)
	const data = await response.json()

	const hero = data.data.results[0]

	return defer(hero)
}

export const CharacterRoute = {
	path: 'character/:id',
	element: <Character />,
	loader
}
