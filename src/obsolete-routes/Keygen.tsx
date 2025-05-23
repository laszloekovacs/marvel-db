import { ActionFunctionArgs, Form, Link, useActionData } from 'react-router-dom'
import { getSecret, encodeAES, decodeAES } from '../crypto'

export default function Keygen() {
	const actionData = useActionData() as Awaited<ReturnType<typeof action>>

	return (
		<div>
			<h2 className='text-2xl text-red-500'>Keygen</h2>
			<Link to='/'>home</Link>
			<Form method='post'>
				<input
					required
					autoFocus
					minLength={8}
					type='text'
					name='apiKey'
					placeholder='insert marvel public api key here'
				/>
				<button type='submit'>encode</button>
			</Form>

			{actionData && (
				<div className='flex flex-col'>
					<output>secret: {actionData.secret}</output>
					<output>encoded api key: {actionData.encodedApiKey}</output>
					<output>decoded api key: {actionData.decodedApiKey}</output>
				</div>
			)}
		</div>
	)
}

const action = async (args: ActionFunctionArgs) => {
	const formData = await args.request.formData()
	const apiKey = formData.get('apiKey') as string

	const secret = getSecret()
	const encodedApiKey = encodeAES(apiKey, secret)
	const decodedApiKey = decodeAES(encodedApiKey, secret)

	return {
		secret,
		encodedApiKey,
		decodedApiKey
	}
}

export const KeygenRoute = {
	path: 'keygen',
	element: <Keygen />,
	action
}
