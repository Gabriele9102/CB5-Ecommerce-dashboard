import styles from "./styles.module.scss";
import FormCategories from './../formCategories/index';

const Modal = ({ setShowModal, data, getData }) => {

 return ( 
    <div className={styles.modal}> 

       <button onClick={() => setShowModal(false)}>Close</button>
        <FormCategories
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
       
    </div>
 )
}

export default Modal;