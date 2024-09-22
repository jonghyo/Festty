import { GiJapan, GiCalendar } from 'react-icons/gi'

type FestivalCardProps = {
	id: string
	title: string
	description: string
	place: string
	season: string
	imageUrl: string
	createdAt: string
}

const FestivalCard = ({
	title,
	description,
	place,
	season,
	imageUrl,
}: FestivalCardProps) => {
	return (
		<div className='card bg-base-100 w-96 shadow-xl'>
			<figure>
				<img src={imageUrl} alt='festival' />
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
					<button type='button' className='btn btn-primary'>
						Rate
					</button>
				</div>
			</div>
		</div>
	)
}

export default FestivalCard
