import './Styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import OrderLocation from './OrderLocation';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './Types';
import { fetchProducts } from '../api';
//import {ReactComponent as Logo} from './Logo.svg';

function Orders(){
    const [products,setProducts] = useState<Product[]>([]);
    const [orderLocation,setOrderLocation] = useState<OrderLocationData>();

    console.log(products);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    },[])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location=> setOrderLocation(location)} />
        </div> 
    )
}

export default Orders