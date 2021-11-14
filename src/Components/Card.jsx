import styles from "./Card.module.scss"
let Card = ({item, button, onButton, onTag}) => {
    return (
        <div className={styles.card}>
            <div className={styles.headerOfCard}>
                <h4>{item.author}</h4>
                <button onClick={()=>onButton(item)} className={styles.button}>{button}=></button>
            </div>
            <h3>{item.title}</h3>
            <div>{item.description}</div>
            <div className={styles.tags}>
                {item.tags.map((item, index) => {
                    return (
                        <div onClick={()=>onTag(item)} className={styles.tag} key={index}>#{item}</div>)
                })}
            </div>

        </div>
    )
}

export default Card