import { useState } from 'react'
import { GiRoundStar } from 'react-icons/gi'

type RateDialogProps = {
	handleCloseClick: () => void
	handleSaveClick: () => void
}

const RateDialog = ({ handleCloseClick, handleSaveClick }: RateDialogProps) => {
	const [rating, setRating] = useState(0)

	const starColor = (starValue: number) => {
		return rating >= starValue ? 'text-accent' : 'text-neutral-content'
	}

	return (
		<div className='fixed top-0 backdrop-blur-sm bg-black/30 h-screen w-screen flex items-center justify-center'>
			<div className='card bg-base-100 w-80 h-fit shadow-xl'>
				<div className='card-body'>
					<div className='card-actions justify-end'>
						<button type='button' className='btn btn-square btn-sm'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								onClick={handleCloseClick}
								onKeyDown={handleCloseClick}
							>
								<title>close</title>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
					<div className='flex text-5xl gap-1 pb-6 justify-center'>
						<GiRoundStar
							className={starColor(1)}
							onClick={() => setRating(1)}
						/>
						<GiRoundStar
							className={starColor(2)}
							onClick={() => setRating(2)}
						/>
						<GiRoundStar
							className={starColor(3)}
							onClick={() => setRating(3)}
						/>
						<GiRoundStar
							className={starColor(4)}
							onClick={() => setRating(4)}
						/>
						<GiRoundStar
							className={starColor(5)}
							onClick={() => setRating(5)}
						/>
					</div>
					<div className='card-actions justify-center'>
						<button
							type='button'
							className='btn btn-accent text-white'
							onClick={handleSaveClick}
						>
							評価を保存する
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RateDialog
