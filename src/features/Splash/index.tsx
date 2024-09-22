import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Splash = () => {
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate('/festival')
		}, 3000)
	}, [navigate])

	return (
		<div className='hero bg-base-200 min-h-screen'>
			<div className='hero-content text-center'>
				<h1 className='text-8xl font-bold text-accent'>Festty</h1>
			</div>
		</div>
	)
}

export default Splash
