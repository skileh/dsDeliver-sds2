import './Styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './Types';
import { fetchProducts } from '../api';
//import {ReactComponent as Logo} from './Logo.svg';

function Orders(){
    const [products,setProducts] = useState<Product[]>([]);
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
        </div> 
    )
}

export default Orders