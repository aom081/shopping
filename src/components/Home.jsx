import React from 'react'
import AddProduct from './AddProduct'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const Home =() => {
    const products = useSelector((state) => state.products);
    console.log(products.products);
    return (
        <div>
            <main className='py-8 max-w-7x1 mx-auto px-4'>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
                    <div className="col-span-2">
                        <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
                           {products.length ? (
                            products.map((p, i) => {
                                return <ProductItem key={i} product={p} />;
                            })
                            ) : (<div> No Item </div>)}
                        </div>
                        <AddProduct/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
