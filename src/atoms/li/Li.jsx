import styles from './styles.module.scss';

const Li = ({label, icon}) => {

    return(
        <li className={styles.main}>
            <div className={styles.label}>{label}</div>
            <div className={styles.icon}>{icon}</div>
        </li>
    )
}

export default Li;