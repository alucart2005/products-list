import React from 'react';


const ProductsList = ({ dataForm, deleteButton, modifyButton, deleteObeject, modifyObject }) => {
  return (
    <ul className='ul'>
      {dataForm.map((obejectForm, index) =>
        <div className='card'>
          <li className='ul__li--disponible'
          key={index}>
          <h2 ><span className='li__h2--span' >Name: </span>{obejectForm.name}</h2>
          <h3 ><span className='li__h2--span'>Category: </span> {obejectForm.category}</h3>
          <h3 ><span className='li__h2--span'>Price: </span> {`$ ${obejectForm.price}`}</h3>
          {obejectForm.isAvailable ?
            <div className='ul__li--divAvailable'>
              <h4 className='ul__li--h4'>Not available <img className='icon--available' src="/cheque.png" alt="Not available" />
              </h4>
            </div>
            :
            <div className='ul__li--divAvailable'>
              <h4 className='ul__li--h4'>Available <img className='icon--available' src="/cerrar.png" alt="Available" />
              </h4>
            </div>
          }
          <div className='ul__li--div'>
            <button className='ul__li--button' onClick={() => deleteObeject(obejectForm)}>{<img className='button--icon' src={`${deleteButton}`} alt="delete" />}</button>
            <button className='ul__li--button' onClick={() => modifyObject(obejectForm)}>{<img className='button--icon' src={`${modifyButton}`} alt="delete" />}</button>
          </div>
        </li>
        </div>
      )}
    </ul>
  );
};

export default ProductsList;


