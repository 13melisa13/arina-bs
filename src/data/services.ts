const serviceImageUrl = process.env.PUBLIC_URL + '/images/service.png';
const services = [
	{
		title: 'Помыть тарелку',
		busynessName: 'Бизнес тарелка',
		price: 1000,
		id:1,
		imageUrl: serviceImageUrl
	},
	{
		title: 'Услуга 2',
		busynessName: 'Busyness 2',
		price: 2000,
		id:2,
		imageUrl: serviceImageUrl
	},
	{
		title: 'Услуга 3',
		busynessName: 'Busyness 3',
		price: 3000,
		id:3,
		imageUrl: null
	}
	];
export default services