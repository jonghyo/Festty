import { GiJapan, GiCalendar } from 'react-icons/gi'

type FestivalCardProps = {
	id: string
	title: string
	description: string
	place: string
	season: string
	imageUrl: string
	createdAt: string
	handleRateClick: () => void
}

const FestivalCard = ({
	title,
	description,
	place,
	season,
	imageUrl,
	handleRateClick,
}: FestivalCardProps) => {
	return (
		<div className='card bg-base-100 w-full h-fit shadow-xl'>
			<figure>
				<img
					src={imageUrl}
					alt='festival'
					className='h-80 w-full object-cover'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{description}</p>
				<p className='flex items-center gap-2'>
					<GiJapan />
					{place}
				</p>
				<p className='flex items-center gap-2'>
					<GiCalendar />
					{season}
				</p>
				<div className='card-actions justify-end'>
					{/* TODO: 過去に評価済みの場合はここに本人の評価を表示させる */}
					<button
						type='button'
						className='btn btn-accent text-white'
						onClick={handleRateClick}
					>
						評価する
					</button>
				</div>
			</div>
		</div>
	)
}

export default FestivalCard
