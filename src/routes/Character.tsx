import {
	Await,
	defer,
	LoaderFunction,
	useAsyncValue,
	useLoaderData,
	useParams
} from 'react-router-dom'
import { getApiKey } from '../crypto'
import { getBaseUrl } from '../env'
import { Suspense } from 'react'

export default function Character() {
	const { character } = useLoaderData() as { character: CharactersSchema }

	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={character}>
					<CharacterProfile />
				</Await>
			</Suspense>
		</div>
	)
}

const CharacterProfile = () => {
	const { data } = useAsyncValue()
	const hero = data.results[0]

	return (
		<div>
			<h2 className='text-2xl'>{hero.name}</h2>
			{hero.description ? (
				<p>{hero.description}</p>
			) : (
				<p className='text-red-500'>Description Classified</p>
			)}

			<img
				src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
				alt={hero.name}
			/>
		</div>
	)
}

const loader: LoaderFunction = async ({ params }) => {
	// throw error when no id is set

	const url = new URL(getBaseUrl())
	url.pathname = '/v1/public/characters/' + params.id
	url.searchParams.set('apikey', getApiKey())

	return defer({ character: fetch(url).then(res => res.json()) })
}

export const CharacterRoute = {
	path: 'character/:id',
	element: <Character />,
	loader
}
