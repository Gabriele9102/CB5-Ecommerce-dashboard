import styles from './styles.module.scss';
import RefreshButton from '../../atoms/RefreshButton';
import EditBtn from './../../atoms/EditBtn';
import DeleteBtn from '../../atoms/DeleteBtn';
import AddBtn from './../../atoms/AddBtn/index';
import { TbTrash,TbEdit } from "react-icons/tb";

const Table = ({list, getData}) => {
    return( 
        <div className={styles.table}>
        <div className={styles.head}>
        <div className={styles.top}>
        <p>ID</p>
        <p>IMG</p>
        <p>NAME</p>
        
        </div>
        
        <RefreshButton getData={getData}/>

        </div>
        <div className={styles.body}>
            

        
            {list.map(list=> (
        <div className={styles.wrapper} key={list.id}>
            <div className={styles.tableMap} key={list.id}> 
            
            <p>{list.id}</p>

            <img src={list.image} alt={list.name} />

            <p>{list.name.substring(0,20)}</p>
            
        </div>
        <div className={styles.Btns}>
        <EditBtn  getData={getData} data={{ name: list.name, image: list.image, id: list.id }}/>
        <DeleteBtn getData={getData} id={list.id} />
            
        </div>


        

            </div>
            
                
                ))}
        </div>

        </div>
    )
}

export default Table;