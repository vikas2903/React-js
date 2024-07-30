import React from 'react';
import Product from '../Product';
import mens_kurta from '../data/Men/men_kurta';
import mens_jeans from '../data/Men/men_jeans.json'
import men_shirt from '../data/Men/men_shirt.json'
import women_top from '../data/Women/women_top.json'


function ProductList() {

    return (
        <>
            < Product title ="mens"  products = {mens_kurta}/>
            < Product title ="women's top" products={women_top} />
            < Product title ="men's Jeans"  products={mens_jeans}/>
            < Product title ="men's shirt" products={men_shirt} />

        </>
    )
}   

export default ProductList