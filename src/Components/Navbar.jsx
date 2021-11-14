import styles from "./Navbar.module.scss"
import {NavLink} from "react-router-dom"

let Navbar = ({props}) => {
    return (
        <div className={styles.navbar}>
                <NavLink to="/toread" activeClassName={styles.active}>{props[0].title + "(" + props[0].count + ")"}</NavLink>
                <NavLink to="/inprogress" activeClassName={styles.active}>{props[1].title + "(" + props[1].count + ")"}</NavLink>
                <NavLink to="/done" activeClassName={styles.active}>{props[2].title + "(" + props[2].count + ")"}</NavLink>
        </div>
    )
}

export default Navbar