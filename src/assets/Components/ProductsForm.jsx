import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ProductsForm = ({ submitButton, sendOfProducsForm, sendAppToForm, sendFormToApp }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const getFormData = (data) => {
    if (sendAppToForm === null) {
      sendOfProducsForm(data);
      reset(
        {
          name: '',
          category: '',
          price: '',
          isAvailable: false
        }
      )
    } else {
      sendFormToApp(data);
    }
  }

  useEffect(() => {
    if (sendAppToForm === null) {
      reset(
        {
          name: '',
          category: '',
          price: '',
          isAvailable: false
        }
      )

    } else {
      reset(sendAppToForm);
    }
  }, [sendAppToForm])

  return (
    <form className="form " onSubmit={handleSubmit(getFormData)}>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="name-id">Product Name</label>
        <input className='label__div--input'
          type="text"
          id="name-id"
          {...register('name', { required: true })}
        />
        {
          errors.name
          &&
          <label htmlFor='name-id' className='label__error'>This information is required</label>
        }
      </div>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="category-id">Category </label>
        <input className='label__div--input'
          type="text"
          id="category-id"
          {...register('category', { required: true })}
        />
        {
          errors.category
          &&
          <label htmlFor='category-id' className='label__error'>This information is required</label>
        }
      </div>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="price-id">Price</label>
        <input className='label__div--input'
          type="number"
          id="price-id"
          {...register('price', { required: true })}
        />
        {
          errors.price
          &&
          <label htmlFor='price-id' className='label__error'>This information is required</label>
        }
      </div>
      <div className='form__butom'>
        <label className="form__div--label" htmlFor="isAvailable-id">Product availability</label>
        <div className='form__div--switch'>
          <input className='label__div--input form__label--inputCheckbox'
          type="checkbox"
          id="isAvailable-id"
          {...register('isAvailable')}   
        />
        </div>
      </div>
      <button className="form-button" type='submit'>{submitButton}</button>
    </form>

  );
};

export default ProductsForm;