import {Link} from "react-router-dom";
import styles from "./service.module.scss";
import {UIButton} from "../../button/UIButton";

type ServiceProps = {
    title: string
    id: number,
    busynessName: string,
    imageUrl: string | null,
    price: number

}
const defaultImageUrl = "https://via.placeholder.com/150"
export default function Service({...cardProps}: ServiceProps) {
    const {title, id, busynessName, imageUrl, price} = cardProps
    if (!title || !id ) return null
    return (
        <div className={styles.card}>
            <img src={imageUrl || defaultImageUrl} alt={title} className={styles.background}/>
            <div className={styles.text}>
                <Link to={`/services/${id}`} className={styles.link}>
                <h3 className={styles.title}>{title}</h3>
                </Link>
                <p className={styles.busynessName}>{busynessName}</p>
                <p className={styles.price}>{price}руб.</p>
                <UIButton onClick={() => {}} children={""} title={"Забронировать"} img={'heart'}/>
            </div>
        </div>
    )
}