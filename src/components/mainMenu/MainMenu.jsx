import styles from './styles.module.scss';
import { mainMenuLinks } from '../costants/mainMenu';
import Li from '../../atoms/li';

const MainMenu = () => {
    return(
        <ul className={styles.main}>
        {
            mainMenuLinks.map((link, index) => (<Li  key={link.id} label={link.label}/>))
        }

        </ul>
    )
}

export default MainMenu;