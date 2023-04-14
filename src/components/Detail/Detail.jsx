import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";


 
const Detail =()=>{ 
const URL_BASE ='https://be-a-rym.up.railway.app/api/character';
 const API_KEY ='66a0bdb74977.b0243047a690964c64f4';
    const {id} = useParams()
    
    const [character,setCharacter]= useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
        <div>
            {character.name ? (
            <>  
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
            <img src={character.image} alt= " " />
            </> 
            ) :(
                <h2>cargando...</h2>
            ) }
        </div>
    )
   

}
export default Detail;