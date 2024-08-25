import {Link} from "react-router-dom";
import styles from "./product.module.scss";
import {UIButton} from "../../button/UIButton";
import {useDispatch} from "react-redux";
import img from "@images/product.png"
import {addProduct, decrementProduct, incrementProduct, Product as ProductType, removeProduct} from "../../../services/productSlice";
type ProductProps = {
    title: string
    id: number,
    imageUrl: string | null,
    price: number,
    count?: number,
    isAuth?: boolean

}
const defaultImageUrl = 'https://via.placeholder.com/150'
export default function Product({...cardProps}: ProductProps) {
    const dispatch = useDispatch();
    const {title, id, imageUrl
        , count, price
    } = cardProps
    if (!title || !id ) return null
    cardProps.isAuth = true;
    const buttonProps = {
        borderColor: 'dark-pink',
        color: 'dark-pink',
        backgroundColor: 'white',
        to: !cardProps.isAuth ? '/login' : undefined,
        paddingTop: 10,
        paddingAside: 10,
        className: styles.button
    }
    return <div
        className={styles.card}>
        <Link to={`/products/${id}`} className={styles.link}>

            <img src={img || defaultImageUrl}
                 onError={(e) => {
                     e.currentTarget.src = defaultImageUrl
                 }}
                 alt={title} className={styles.background}/>
        </Link>

        <p className={styles.price}>{price}руб.</p>
        <h3 className={styles.title}>{title}</h3>
        {!count || count === 0 ?
            <div className={styles.manage}>
                <UIButton children={'В корзину'}
                          {...buttonProps}
                          onClick={() =>
                              dispatch(addProduct(new ProductType(title, id, price, imageUrl)))}
                          imgBefore={'heart'}

                />
            </div>
            : <div className={styles.manage}>
                <UIButton children={'+'}

                          {...buttonProps}
                          onClick={() =>
                              dispatch(incrementProduct(id))

                          }

                />
                <span >{count}</span>
                <UIButton children={'-'}
                          {...buttonProps}

                          onClick={() => dispatch(decrementProduct(id))}
                />

            </div>}


    </div>
}