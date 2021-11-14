import styles from "./Filter.module.scss"

let Filter = ({items, clear}) => {
    return (
        <div className={styles.filter}>
            <div className={styles.tags}>
                <div>Filteres by tags:</div>
                {items.map((item, index) => <div className={styles.tag} key={index}>#{item}</div>)}
            </div>
            <button onClick={()=>clear(items)} >(clear)</button>
        </div>
    )
}
export default Filter