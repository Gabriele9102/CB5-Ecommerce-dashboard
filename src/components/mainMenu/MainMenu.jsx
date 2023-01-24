import styles from './styles.module.scss';
import { mainMenuLinks } from '../costants/mainMenu';
import Li from '../../atoms/li';

const MainMenu = ({setRoute}) => {
    return(
        <ul className={styles.main}>
        {
            mainMenuLinks.map((link, id) => (<Li setRoute={setRoute} routeUrl = {link.route}  icon={link.icon} label={link.label} key={id} />))
        }

        </ul>
    )
}

export default MainMenu;