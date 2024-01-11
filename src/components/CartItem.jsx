import React from 'react'
import { IoIosClose } from "react-icons/io";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cart/action';
import { addQuantity, removeQuantity  } from '../redux/products/action';
import { useDispatch } from 'react-redux';

const CartItem = ({ product }) => {
    const { id, name, imageURL, category, price, quantity, productId } = product;
    const dispatch =useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
        dispatch(addQuantity(productId, quantity));
    }
    return (
        <div>
            <div className="rounded-lg">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img className='w-full h-28 rounded sm:w-40'
                        src={imageURL}
                        alt={product}
                    />
                    <div className="sm:ml4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                            <h3 className="text-lg font-bold text-gray-900">
                                {name}
                            </h3>
                            <p className="mt-1 text sm text-gray-700">Price: {price}</p>
                            <p className="mt-1 text sm text-gray-700">Price: {price} ฿</p>
                            <p className="mt-1 text sm text-gray-700">Category: {category}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 5 duration-100 hover:bg-blue-500 hover:text-blue-500">
                                {" "}
                                -{" "}
                            </span>
                            <input
                                type="number"
                                min="1"
                                className="number h-8 w-8 border bg-white text-center text-xs outline-none" />
                            <span className='cursor-pointer rounded-1 bg-gray-100 py-1 px-3 5 duration-100 hover:bg-blue-500 hover:text-blue-500'>
                                {" "}
                                +{" "}
                            </span>
                        </div>
                        <div className='flex-items-center space-x-4'>
                            <p className='text-sm'>{price * quantity} ฿</p>
                            <button className='lws-removeFromCart' 
                            onClick={handleRemoveFromCart}> <IoIosClose /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
