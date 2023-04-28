import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import style from './Detail.module.css'


 
const Detail =()=>{ 
const URL_BASE ='http://localhost:3001/rickandmorty/character';
//  const API_KEY ='66a0bdb74977.b0243047a690964c64f4';
    const {id} = useParams()
    
    const [character,setCharacter]= useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.contenedor}>
            {character?.name ? (
            <>  
            <img className={style.imagen}src={character?.image} alt= " " />
            <h1 className={style.name}>{character?.name}</h1>
            <h3 className={style.status}>{character?.status}</h3>
            <h3 className={style.species}>{character?.species}</h3>
            <h3 className={style.gender}>{character?.gender}</h3>
            <h3 className={style.name}>{character?.origin.name}</h3>
          
            </> 
            ) :(
                <h2>cargando...</h2>
            ) }
        </div>
    )
   

}
export default Detail;