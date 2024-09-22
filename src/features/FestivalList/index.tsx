import { dummyCardData } from '@/mocks/cards'
import FestivalCard from '@/components/FestivalCard'

const FestivalList = () => {
	return (
		<div>
			<div className='carousel w-full h-full'>
				{dummyCardData.map((card) => (
					<div key={card.id} className='carousel-item w-full h-full'>
						<FestivalCard {...card} />
					</div>
				))}
			</div>
		</div>
	)
}

export default FestivalList
