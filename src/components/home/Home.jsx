import { useState, useEffect } from 'react';
import { GET } from '../utils/HTTP';
import Users from '../Users/Users';
import styles from './styles.module.scss';


const Home = () => {

 const [nProducts, setNproducts] = useState([]);
 const [nCategory, setnCategory] = useState([]);
 const [nUsers, setnUsers] = useState([]);
 const [userProf, setUsersProf] = useState([]);

 
 
 useEffect(() => {
     
     GET("products").then(data => {
         setNproducts(data.length);
         
        });
        
        
        GET("categories").then(data => {
            setnCategory(data.length);
            
        });
        
        GET("users").then(data => {
            setUsersProf(data);
            setnUsers(data.length);
      });


      }, []);


    return( 
        <div className={styles.home}>
            
            <h1>Home</h1>

            <div className={styles.wrapper}>
                <div className={styles.wraplist}>

                <div className={styles.plenght}>
                    <h2>Products: </h2>
                    <h3>{nProducts}</h3>
                </div>

                <div className={styles.clenght}>
                    <h2>Categories: </h2>
                    <h3>{nCategory}</h3>
                </div>

                <div className={styles.ulenght}>
                    <h2>More than: </h2>
                    <h3>{nUsers} Users</h3>
                </div>

                </div>
                    
                    <div className={styles.usermap}>
                    {userProf.map((userProf, index) =>(
                    <Users key={index} userProf= {userProf} />
                ))}
                
                    </div>

            </div>

        </div>
    )
}

export default Home;