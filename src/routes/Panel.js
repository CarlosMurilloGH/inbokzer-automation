import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../components/AuthProvider';
import PanelWrapper from '../components/PanelWrapper';

export default function Panel() {

  const [currentUser,setCurrentUser]=useState([]);
  const [state,setCurrentState]=useState(0);
  const [nombre,setNombre]=useState("");
  const [precio,setPrecio]=useState("");
  const [productos,setProductos]=useState([]);

  const navigate=useNavigate();

  function handleUserLoggedIn(user){
      setCurrentUser(user);
      setCurrentState(2);
    }

    function handleUserNotRegistered(user){
      navigate('/iniciar');

      }

    function handleUserNotLoggedIn(){
      navigate("/iniciar");
    }

    if(state === 0){
      return (
        <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        >
          Loading...
        </AuthProvider>
      )
    }

    //funciones del formulario

    //Enviar Formulario
    function handleOnSubmit(e){
      e.prevent.Default();
      addProducto();
    }

    function addProducto(){
      if(nombre !== "" && precio !== ""){
        const newProducto={
          id:"2",
          nombre:nombre,
          precio:precio,
          uid:currentUser.uid,
        };
        const res=insertNewProducto(newProducto);
        newProducto.docId = res.id;
        setNombre("");
        setPrecio("");
        setLinks([...productos, newProducto ])
      }
    }

    //Obtener datos del formulario
    function handleOnChange(e){
      const value=e.target.value;
      if(e.target.name === "nombre"){
        setNombre(value);
      }
      if(e.target.name === "precio"){
        setPrecio(value);
      }
    }

    return(
      <PanelWrapper>
        <div>
          <h1>Dashboard</h1>
        </div>

        <div>
          <form className="productForm">
            <div className="tituloform">
              <p>Sube o Edita tu producto</p>
            </div>
            <div className="uploadbox">
              <label className="uploadButton">Imagen del producto </label>
                  <input
                type="file"
                onChange={a}
                accept="image/png, image/gif, image/jpeg"
              />
            </div>
            <div className="nombrebox">
              <input
                type="text"
                onChange={handleOnChange}
                value={a}
                name="nombre"
                placeholder="nombre del producto"
                className="inputForm"
              />
            </div>

            <div className="preciobox">
              <input
                type="number"
                onChange={handleOnChange}
                value={data.price}
                name="precio"
                placeholder="precio del producto"
                className="inputForm"
              />
            </div>
            <button className="BotonPositivo" onClick={a}>Guardar</button>
            <button className="BotonNegativo" onClick={a}>
              Limpiar
            </button> 
          </form>
        </div>
      </PanelWrapper>
    )
  

}
