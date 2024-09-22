import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import FestivalList from '@/features/FestivalList'
import Profile from '@/features/Profile'

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>hello, world</div>,
	},
	{
		path: '/festival',
		element: <FestivalList />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
])

const Router = () => {
	return <RouterProvider router={router} />
}

export default Router
