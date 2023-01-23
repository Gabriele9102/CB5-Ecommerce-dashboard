import MainMenu from './../mainMenu/index';
import styles from './styles.module.scss'

const Container = () => {

    return ( 
        <div className={styles.header}>

        <div className={styles.leftColumn}> <MainMenu /> </div>
        <div className={styles.rightColumn}></div>
        </div>
    )
}

export default Container;