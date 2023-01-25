
import styles from "./styles.module.scss";
import FormCategories from './../formCategories';


const EditModal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button onClick={() => setShowModal(false)}>Chiudi</button>
        <FormCategories
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default EditModal;
