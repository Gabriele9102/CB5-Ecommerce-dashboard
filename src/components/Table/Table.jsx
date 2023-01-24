import styles from './styles.module.scss';

import { GrPowerCycle } from "react-icons/gr";

const Table = ({list, getData}) => {
    return( 
        <div className={styles.table}>
        <div className={styles.head}>
        <div className={styles.top}>
        <p>ID</p>
        <p>IMG</p>
        <p>NAME</p>
        
        </div>
        
         <button onClick={() =>getData()}><GrPowerCycle /></button>

        </div>
        <div className={styles.body}>
            {list.map(list=> (
            <div className={styles.tableMap} key= {list.id}> 
            
            <p>{list.id}</p>

            <img src={list.image} alt={list.name} />

            <p className={styles.name}>{list.name}</p>
            <div className={styles.buttons}>

            <button>Edit</button>
            <button>Remove</button>
            <button>Add</button>

            </div>

            </div>
            
                
                ))}
        </div>

        </div>
    )
}

export default Table;