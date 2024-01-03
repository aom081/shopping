import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../redux/products/actionType';

const AddProduct = () => {
    const dispatch = useDispatch();
    const { register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    reset();
    return (
        <div className='formContainer'>
            <h4 className='formTitle'> Add new Product</h4>
            <form className='space-y-4 text-[#534FAF]'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-2'>
                    <label> Product Name</label>
                    <input type="text"
                        className='addProductInput'
                        {...register("name", { required: true })}
                    />
                </div>
                <div className='space-y-2'>
                    <label> Category </label>
                    <section className='AddProductInput'>
                        <option value=""> Select a category </option>
                        <option value="Clothing"> Clothing</option>
                        <option value="gadgets"> Gadgets</option>
                        <option value="bags"> Bags</option>
                    </section>
                    {errors.category && <span> Image URL is required</span>}
                </div>
                <div className="space-y-2">
                    <label> Image URL</label>
                    <input type="text"
                        className='addProductInput'
                        {...register("name", { required: true })}
                    />
                    {errors.category && <span> Image URL is required</span>}
                </div>
                <div className="grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label> Price</label>
                        <input type="number"
                            className='addProductInput'
                            {...register("name", { required: true })}
                        />
                        {errors.category && <span> Image URL is required</span>}
                    </div>
                    <div className="space-y-2">
                        <label> Quantity</label>
                        <input
                            type="number"
                            className='addProductInput'
                            id='lws-inputQuantity'
                            {...register("name", { required: true })}
                        />
                        {errors.category && <span> Image URL is required</span>}
                    </div>
                </div>
                <button type='submit' className='submit bg-indigo-600 text-white'>
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct
