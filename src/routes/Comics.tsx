import useSWR from 'swr'
import { getApiKey } from '../crypto'
import { getBaseUrl } from '../env'
import { Link } from 'react-router-dom'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Comics() {
	const url = getBaseUrl() + '/v1/public/comics?apikey=' + getApiKey()
	const { data, error, isLoading } = useSWR(url, fetcher)

	if (error) return <div>Failed to load</div>
	if (isLoading) return <div>Loading...</div>

	return (
		<div>
			<h2>Comics</h2>
			<ul>
				{data.data.results.map((comic: any) => (
					<li key={comic.id}>
						<Link to={`/comic/${comic.id}`}>{comic.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const ComicsRoute = {
	path: '/comics',
	element: <Comics />
}
