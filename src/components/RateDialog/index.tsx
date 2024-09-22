type RateDialogProps = {
	handleSaveClick: () => void
}

const RateDialog = ({ handleSaveClick }: RateDialogProps) => {
	return (
		<div className='fixed top-0 backdrop-blur-sm bg-black/30 h-screen w-screen flex items-center justify-center'>
			<div className='card bg-base-100 w-80 h-fit shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title'>評価する (TBD)</h2>
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
