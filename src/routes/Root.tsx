import { Link, Outlet } from 'react-router-dom'
import '../index.css'

export const loader = () => {}

function Root() {
	return (
		<div className='px-4 py-2'>
			<h2 className='text-3xl text-red-500'>Marvel db</h2>
			<div className='flex flex-row gap-2'>
				<Link to='/keygen'>keygen</Link>
				<Link to='/characters'>characters</Link>
				<Link to='/comics'>comics</Link>
			</div>
			<Outlet />
		</div>
	)
}

export default Root
