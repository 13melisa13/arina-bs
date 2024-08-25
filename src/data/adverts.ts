type advertProps = {
	title: string,
	id: number,
	imageUrl: string | null
}
const advertImageUrl = process.env.PUBLIC_URL + '/images/advert.png';
const adverts: advertProps[] = [
	{
		title: 'Лучший ложки на районе',
		id: 1,
		imageUrl: advertImageUrl
	},
	{
		title: 'Реклама 2',
		id: 2,
		imageUrl: advertImageUrl
	},
	{
		title: 'Реклама 3',
		id: 3,
		imageUrl: null
	}
];
export default adverts