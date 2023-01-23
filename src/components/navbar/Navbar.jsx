import styles from './styles.module.scss'

const Navbar = () => {

    return(
             <div className={styles.navbar}>
             <div className={styles.wrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUOHKqiP_MYHA805FTCLTsjVK8neoTiKCFRppJXE&s" alt="LOGO" />
            <h6> E-commerce</h6>
             </div>
            <ul>
                <li>
                <a href="#Home">HOME</a>
                </li>

                <li>
                <a href="#About">ABOUT</a>
                </li>

                <li>
                <a href="#Contacts">CONTACTS</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;