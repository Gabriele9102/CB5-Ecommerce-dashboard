import { useEffect, useState } from "react";
import { DELETE, GET } from "../utils/HTTP";
import LiProducts from "../../atoms/LiProducts";

import styles from "./styles.module.scss";

const AllProducts = () =>{
    const [products, setProducts] = useState([]);

    const reloadEl = () => {
      GET("products").then(data => {
        setProducts(data);
      });
    };
  
    useEffect(() => {
      reloadEl();
    }, []);
  
    const deleteEl = id => {
      DELETE("products", id).then(data => {
        if (data.status === 200) {
          reloadEl();
        }
      });
    };
  
    return (
      <div className={styles.products}>
        <ul>
          {products.map((product, index) => (
            <LiProducts reloadEl={reloadEl} deleteEl={deleteEl} product={product} key={index}
            />
          ))}
        </ul>
      </div>
    );
  };
  

export {AllProducts};