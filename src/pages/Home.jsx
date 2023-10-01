import React from 'react'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-header'>Money Spending App</div>
            <div className='home-container-wrapper'>
                <ProductList />
                <Cart />
            </div>

        </div>
    )
}
