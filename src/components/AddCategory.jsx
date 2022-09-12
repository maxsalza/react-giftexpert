import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState(' ');
    
    const onInputChange = ({target}) =>{ //desestructura el objeto sacando el target como hacer event.target
        console.log(target.value);
        setInputValue(target.value);    
    }

    const onSubmit = (event) =>{
        event.preventDefault(); // esto es para que no recarge la pagina
        if( inputValue.trim().length <=1) return; // esto lo que hace que no puedan ingresar un value vacio
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue(''); // esto lo hacemos para setear el componente en vacio y se limpie nuestro input.
    }

  return (
        <form onSubmit = {onSubmit}>
             <input type="text" placeholder='Buscar Gif' value={inputValue} onChange={ onInputChange }/> {/*(event) => onInputChange(event)*/}
        </form>
       
  )
}
