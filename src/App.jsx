import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Load from './assets/Components/Load';
import ProductsForm from './assets/Components/ProductsForm';
import ProductsList from './assets/Components/ProductsList';
import PopUp from './assets/Components/PopUp';
import Error from './assets/Components/Error';


function App() {
  const [updateProducts, setUpdateProducts] = useState(null);
  const [data, useData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate,] = useState(false);
  const [isError, setIsError] = useState(false);

  function timeInScreen(setHook) {
    setHook(true)
    setTimeout(() => {
      setHook(false)
    }, 1300)
  }

  const getData = async () => {
    setIsLoad(true)
    try {
      const reply = await axios.get('https://products-crud.academlo.tech/products/')
      if (reply.status === 200) {
        useData(reply.data)
      }
    } catch (error) {
      timeInScreen(setIsError);

    } finally {
      setIsLoad(false)
    };
  }

  useEffect(() => {
    getData()
  }, []);

  const sendOfProducsForm = (body) => {

    const postData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.post('https://products-crud.academlo.tech/products/', body);
        if (reply.status === 201) {
          getData();
          timeInScreen(setIsCreated);
        }
      } catch (error) {
        timeInScreen(setIsError);

      } finally {
        setIsLoad(false)
      };
    }
    postData();
  };

  const deleteObeject = (body) => {
    const deleteData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.delete(`https://products-crud.academlo.tech/products/${body.id}/`);
        if (reply.status === 204) {
          getData();
          timeInScreen(setIsDelete);
        }
      } catch (error) {
        timeInScreen(setIsError);
      } finally {
        setIsLoad(false)
      };
    };
    setUpdateProducts(null)
    deleteData();
  };

  const modifyObject = (body) => {
    setUpdateProducts(body);
  }

  const sendFormToApp = (body) => {

    const putData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.put(`https://products-crud.academlo.tech/products/${body.id}/`, body);
        if (reply.status === 200) {
          getData();
          timeInScreen(setIsUpdate);
        }
      } catch (error) {
        timeInScreen(setIsError);

      } finally { setIsLoad(false) };
    }
    setUpdateProducts(null)
    putData();
  }

  const componentProductsForm =
    <ProductsForm
      submitButton={'Create'}
      sendOfProducsForm={sendOfProducsForm}
      sendAppToForm={updateProducts}
      sendFormToApp={sendFormToApp}
    />;
  const componentProductsList =
    <ProductsList
      dataForm={data}
      deleteButton={'/delete.png'}
      modifyButton={'/edit.png'}
      deleteObeject={deleteObeject}
      modifyObject={modifyObject}
    />;
  const componentError = <Error />
  const componentLoad = <Load />
  const componentCreate = <PopUp
  text={'Product created successfully!'}
  />
  const componentDelete = <PopUp
    text={'Product Delete successfully!'}  />
    const componentEdit = <PopUp
    text={'Product edited successfully!'}
  />

  return (
    <div className="App">
      <div>
        {isError && componentError}
        {isLoad && componentLoad}
        {isCreated && componentCreate}
        {isDelete && componentDelete}
        {isUpdate && componentEdit}
        {componentProductsForm}
      </div>
      <div >
        {componentProductsList}
      </div>
    </div>
  )
}

export default App
