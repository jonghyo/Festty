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
	createdAt,
}: FestivalCardProps) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<p>{place}</p>
			<p>{season}</p>
			<img src={imageUrl} alt={title} width={'100%'} />
			<p>{createdAt}</p>
		</div>
	)
}

export default FestivalCard
