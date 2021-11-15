import styles from "./Filter.module.scss"
import {NavLink} from "react-router-dom";

let Filter = ({items, clear, url}) => {

    return (
        <div className={styles.filter}>
            <div className={styles.tags}>
                <div>Filteres by tags:</div>
                {items.map((item, index) => <div className={styles.tag} key={index}>#{item}</div>)}
            </div>

            <button onClick={()=>clear(items)}><NavLink to={url}>(clear)</NavLink></button>
        </div>
    )
}
export default Filter