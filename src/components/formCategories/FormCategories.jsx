import { useEffect, useState } from "react";
import { PUT, POST } from './../utils/HTTP';

import styles from './styles.module.scss';




const FormCategories = ({ setShowModal, getData, data }) => {
    
    const [edit, setEdit] = useState (false);
    const [form, setForm] = useState({
        name: "",
        image: "",
    })

    const handleForm = (input, e) => {
        setForm({ ...form, [input]: e.target.value})
    }

    useEffect(() => {
        if (data) {
          setForm({
            name: data.name,
            image: data.image,
          });
          setEdit(true);
        }
      }, []);

    const submitForm = e => {
        e.preventDefault();
        POST("categories", form)
        .then(data => {
          console.log(data);
          if (data.status === 201) {
            setShowModal(false);
            getData();
          }
        });
      };
    
      const editForm = e => {
        e.preventDefault();
        PUT("categories", form, "/" + data.id)
        .then(data => {
          console.log(data);
          if (data.status === 200) {
            setShowModal(false);
            getData();
          }
        });
      };


    return (
    <form className={styles.formCategories}>
        <input 
        type="text" 
        value={form.image}
        onChange={(e) => handleForm("image", e)}
        placeholder="Url image..."
        required
        />

        <input 
        type="text" 
        value={form.name}
        onChange={(e) => handleForm("name", e)}
        placeholder="Name..."
        required
        />

        {edit ? (
        <button type="submit" onClick={(e) => editForm(e)}>
          edit
        </button>
      ) : (
        <button type="submit" onClick={(e) => submitForm(e)}>
          send
        </button>
      )}

    </form>
)}

export default FormCategories;