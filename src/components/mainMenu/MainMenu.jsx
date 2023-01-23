import styles from './styles.module.scss';
import { mainMenuLinks } from '../costants/mainMenu';
import Li from '../../atoms/li';

const MainMenu = () => {
    return(
        <ul className={styles.main}>
        {
            mainMenuLinks.map((link, id) => (<Li icon={link.icon} label={link.label} key={id} />))
        }

        </ul>
    )
}

export default MainMenu;