import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import ProductItem from './ProductItem';

export default function ProductList() {
    const { products } = useSelector(state => state.productSlice);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, [])
    return (
        <div className='product-list-container'>
            {products?.map((product, i) => (
                <ProductItem key={i} product ={product} />
            ))}
        </div>
    )
}
