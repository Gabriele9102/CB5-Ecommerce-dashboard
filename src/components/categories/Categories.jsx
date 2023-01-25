import { useState } from 'react';
import { useEffect } from 'react';
import { GET } from '../utils/HTTP';
import Table from '../Table';
import { GrFormAdd } from "react-icons/gr";
import Modal from '../Modal';
import styles from './styles.module.scss';

const Categories = () => {
  const [showModal, setShowModal] = useState(false);

    const categoryObj = {
        categories: [],
        loading: false
    }
    const [list, setList] = useState(categoryObj)
    const getData = () => {
        setList({ ...list, 
            loading: true });

        GET("categories").then(data =>
            setList({
              loading: false,
              categories: data,
            }))
      };
    
      useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
      return (
        <div className={styles.categories}>
        {showModal && <Modal getData={getData} setShowModal={setShowModal} />}
          <h1>Categories</h1>
          <button onClick={() => setShowModal(true)}><GrFormAdd /></button>
          {list.loading ? ("loading...")  : (<Table key={list.id} list={list.categories} setShowModal={setShowModal} getData={getData}/>)}
         
        </div>
      );
      
    };
    
    export default Categories;
    