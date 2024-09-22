import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Splash from '@/features/Splash'
import FestivalList from '@/features/FestivalList'
import Profile from '@/features/Profile'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Splash />,
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
