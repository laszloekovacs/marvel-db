import { Outlet } from 'react-router-dom'
import '../index.css'

export const loader = () => {}

function Root() {
	return (
		<div className='px-4 py-2'>
			<h2 className='text-3xl text-red-500'>Marvel db</h2>
			<Outlet />
		</div>
	)
}

export default Root
