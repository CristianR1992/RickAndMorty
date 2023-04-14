import { useSelector } from 'react-redux'
import Card from './Card/Card'
import { orderCards,filterCards } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites)

    const [aux,setAux]= useState(false)

    const dispatch = useDispatch();

    const handleOrder=(event)=>{
            dispatch(orderCards(event.target.value))
            setAux(!aux)
                }

    const handleFilter= (event)=>{
        dispatch(filterCards(event.target.value))
    }            
        

    
    return (
        <div>
            <h1>My Favorites</h1>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderlss'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
            
            {favorites.map(({ name, species, origin, status, gender, image, id }) => {
                return (
                    <Card
                        name={name}
                        species={species}
                        origin={origin}
                        status={status}
                        gender={gender}
                        image={image}
                        key={id}
                        id={id} />
                );


            })}
        </div>
    )
}

export default Favorites;

// import {connect} from 'react-redux'
/*const Favorires = ({myFavorites}) => {
    return(
     <div>
     {
       myFavorites.map(fav=>{ 
           return(
               <Card
                  name={name}
                  species={species}
                  origin={origin}
                  status={status}
                  gender={gender}
                  image={image}
                  key={id}
                  id= {id}   /> 
                )
            })
        }
    </div>
    )
}

export default connect(mapStateToProps,null)(Favorites)*/