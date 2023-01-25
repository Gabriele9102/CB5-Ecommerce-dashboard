
import { GrPowerCycle } from "react-icons/gr";
import styles from './styles.module.scss';

const RefreshButton = ({getData}) => {

    return (
        <button className={styles.refreshBtn} onClick={() =>getData()}><GrPowerCycle /></button>
    )
}

export default RefreshButton;

