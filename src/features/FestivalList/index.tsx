import { useState } from 'react'

import { dummyCardData } from '@/mocks/cards'
import FestivalCard from '@/components/FestivalCard'
import RateDialog from '@/components/RateDialog'

const FestivalList = () => {
	const [isRateDialogVisible, setIsRateDialogVisible] = useState(false)

	const showRateDialog = () => {
		setIsRateDialogVisible(true)
	}

	const hideRateDialog = () => {
		setIsRateDialogVisible(false)
	}

	const saveRating = () => {
		// TODO: 評価を保存する
		hideRateDialog()
	}

	return (
		<div>
			<div className='carousel w-full h-full'>
				{dummyCardData.map((card) => (
					<div key={card.id} className='carousel-item w-full h-full'>
						<FestivalCard {...card} handleRateClick={showRateDialog} />
					</div>
				))}
			</div>

			{isRateDialogVisible && (
				<RateDialog
					handleCloseClick={hideRateDialog}
					handleSaveClick={saveRating}
				/>
			)}
		</div>
	)
}

export default FestivalList
