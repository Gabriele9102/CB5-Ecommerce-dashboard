import styles from './styles.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { GET } from '../utils/HTTP';
import Table from '../Table';

const Categories = () => {
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
          <h1>Categories</h1>
          {list.loading ? ("loading...")  : (<Table  list={list.categories} getData={getData}/>)}
          {/* <Table
            list={list.categories}
            loading={list.loading}
            getData={getData}
          /> */}
        </div>
      );
    };
    
    export default Categories;
    