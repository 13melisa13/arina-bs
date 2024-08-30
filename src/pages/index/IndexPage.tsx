import Section from "../../components/section/Section";
import { useSelector} from "react-redux";
import { getProducts} from "../../services/productSlice";
import Product from "../../components/cards/product/Product";
import Advert from "../../components/cards/advert/Advert";
import adverts from "../../data/adverts";
import products from "../../data/products";
import Service from "../../components/cards/service/Service";
import services from "../../data/services";
import {Outlet} from "react-router-dom";




export default function IndexPage() {
	const productCart = useSelector(getProducts);
	return (
		<>
			<Section title={'Рекомендации'} tagTitle={'h1'} afterTitle={'на районе'} moreLink={'/adverts'}>
				{adverts.map((advert, index) => (
					<Advert title={advert.title} id={advert.id} imageUrl={advert.imageUrl} key={index}/>
				))}
			</Section>
			<Section title={'Товары'} tagTitle={'h2'} moreLink={'/products'}>
				{products.map((product, index) => (
					productCart.find((cartProduct) =>
						cartProduct.product.getId() === product.id) ? (
						<Product title={product.name}
								 price={product.price}
								 id={product.id}
								 imageUrl={product.imageUrl}
								 key={index}
								 count={productCart
									 .find(cartProduct =>
										 cartProduct.product.getId() === product.id)?.count}
						/> ) :
						<Product title={product.name}
								 price={product.price}
								 id={product.id}
								 imageUrl={product.imageUrl}
								 key={index}
								 />))}



			</Section>
			<Section title={'Услуги'} tagTitle={'h2'} moreLink={'/services'}>
				{services.map((service, index) => (
					<Service title={service.title}
							 busynessName={service.busynessName}
							 price={service.price}
							 id={service.id}
							 imageUrl={service.imageUrl}
							 key={index}
					/>
				))}
			</Section>
			{/*<Outlet />*/}
		</>
	)
}
