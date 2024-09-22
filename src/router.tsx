import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import FestivalList from '@/features/FestivalList'

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>hello, world</div>,
	},
	{
		path: '/festival',
		element: <FestivalList />,
	},
])

const Router = () => {
	return <RouterProvider router={router} />
}

export default Router
