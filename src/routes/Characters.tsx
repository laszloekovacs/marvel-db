import {
	Await,
	defer,
	Link,
	LoaderFunction,
	useAsyncValue,
	useLoaderData
} from 'react-router-dom'
import { getApiKey } from '../crypto'
import { getBaseUrl } from '../env'
import { Suspense } from 'react'

export default function Characters() {
	const data = useLoaderData() as Awaited<{ characters: CharactersSchema }>

	return (
		<div>
			<h2 className='text-2xl text-red-500'>characters</h2>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Await resolve={data.characters} errorElement={<div>Error</div>}>
						<CharacterTable />
					</Await>
				</Suspense>
			</div>
		</div>
	)
}

const CharacterTable = () => {
	const { data } = useAsyncValue() as CharactersSchema

	return (
		<div>
			<ul>
				{data.results.map((character: any) => (
					<li key={character.id} className='p-2'>
						<Link to={`/character/${character.id}`}>{character.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

const loader: LoaderFunction = async ({ params }) => {
	const offset = params.page ? (parseInt(params.page) - 1) * 20 : undefined

	const url = new URL(getBaseUrl())
	url.pathname = '/v1/public/characters'

	url.searchParams.set('apikey', getApiKey())

	if (offset) {
		url.searchParams.set('offset', offset.toString())
	}

	return defer({ characters: fetch(url).then(res => res.json()) })
}

export const CharactersRoute = {
	path: 'characters',
	element: <Characters />,
	loader
}
