import { useState } from "react";
import styles from "./styles.module.scss";
import { TbEdit } from "react-icons/tb";
import EditModal from "../../components/EditModal";


const EditBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditModal getData={getData} data={data} setShowModal={setShowModal} />
      )}

      <button onClick={() => setShowModal(true)} className={styles.EditBtn}>
        <TbEdit />
      </button>
    </>
  )
};

export default EditBtn;
