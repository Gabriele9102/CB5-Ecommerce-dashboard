import MainMenu from './../mainMenu/index';
import styles from './styles.module.scss'
import { useState } from 'react';
import User from './../user/User';
import Home from './../home/Home';
import Categories from './../categories/Categories';

import Gift from './../gift/Gift';
import Orders from './../orders/Orders';
import {AllProducts} from '../Allproducts/AllProducts';

const Container = () => {
    const [route, setRoute] = useState('home')

    return ( 
        <div className={styles.header}>

        <div className={styles.leftColumn}> <MainMenu setRoute={ setRoute}/> </div>
        <div className={styles.rightColumn}>
        {route==="user"&& <User />}
        {route==="home"&& <Home />}
        {route==="categories"&& <Categories />}
        {route==="products"&& <AllProducts /> }
        {route==="gift"&& <Gift />}
        {route==="orders"&& <Orders />}
        </div>
        </div>
    )
}

export default Container;