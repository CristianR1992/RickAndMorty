import { useState } from "react";
import style from './Nav/Nav.module.css'

function SearchBar({onSearch}) {
   const[id,setId] =useState('')

   const handleChange=(event) =>{
      
      setId(event.target.value);
      
   }
   return (
      <div className={style.contenedor}> 
         <input className={style.input} type='search' value={id} onChange={handleChange}/>
         <button className={style.botonAgregar} onClick={() => {onSearch(id); setId('');}}> Agregar</button>
      </div>
   );
}
export default SearchBar;