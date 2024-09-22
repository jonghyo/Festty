import { dummyCardData } from '@/mocks/cards'
import FestivalCard from '@/components/FestivalCard'

const FestivalList = () => {
	return (
		<div>
			{dummyCardData.map((card) => (
				<FestivalCard key={card.id} {...card} />
			))}
		</div>
	)
}

export default FestivalList
