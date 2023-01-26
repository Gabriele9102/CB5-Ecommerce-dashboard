import { useState } from "react";
import styles from "./styles.module.scss";
import { PUT } from "../../components/utils/HTTP";

const LiProducts = ({ product, deleteEl, reloadEl }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    categoryId: product.category.id,
    images: [product.images[0]],
  });
  const [showForm, setShowForm] = useState(false);

  const handleForm = (input, e) => {
    let inputValue = e.target.value ? e.target.value : 0;
    if (input === "price" || input === "categoryId") {
      inputValue = parseInt(inputValue);
    }

    if (input === "images") {
      inputValue = [inputValue];
    }

    setFormData({
      ...formData,
      [input]: inputValue,
    });
  };

  
  const submitForm = e => {
      e.preventDefault();
      PUT("products", formData, product.id)
      .then(res => res.json())
      .then(data => {
          setShowForm(false);
          reloadEl();
          console.log(data);
        });
    };
    
    const randomImg = product.images[Math.floor(Math.random() * product.images.length)]
  
    return (
    <div className={styles.liProducts}>
    <div className={styles.card}>
    <img src={randomImg} alt="images" />
      <li onClick={() => deleteEl(product.id)}>{product.title}</li>
      <button onClick={() => setShowForm(!showForm)}>Edit</button>
    </div>
    
      {showForm && (
        <form onSubmit={(e) => submitForm(e)}>
          <input
            value={formData.title}
            onChange={(e) => handleForm("title", e)}
            type="text"
          />
          <input
            value={formData.price}
            onChange={(e) => handleForm("price", e)}
            type="text"
          />
          <input
            value={formData.description}
            onChange={(e) => handleForm("description", e)}
            type="text"
          />
          <input
            value={formData.categoryId}
            onChange={(e) => handleForm("categoryId", e)}
            type="text"
          />
          <input
            value={formData.images[0]}
            onChange={(e) => handleForm("images", e)}
            type="text"
          />
          <input type="submit" value="send" />
        </form>
      )}
    </div>
  );
};

export default LiProducts;
