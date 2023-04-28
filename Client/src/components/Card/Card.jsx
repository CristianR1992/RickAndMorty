import { Link } from 'react-router-dom'
import style from './Card.module.css'
import { addFav, removeFav } from '../../redux/actions';
import { useState ,useEffect} from 'react';
import { connect } from 'react-redux';



function Card({ name, species, origin, status, gender, image, onClose, id, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);
   

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
            removeFav(id)}
      else {
         setIsFav(true);
            addFav({ name, species, origin, status, gender, image, onClose, id, addFav, removeFav }) }
      }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);


   return (


      <div className={style.cardContainer}>

         {isFav ? (
            <button className={style.fav}onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={style.fav}onClick={handleFavorite}>🤍</button>
         )}


         <button className={style.buttonClose} onClick={onClose}>X</button>
        
         <Link style={{ textDecoration: 'none' }}to={`/detail/${id}`} >
            <h2 style={{fontSize:22}}>{name}</h2></Link>
         
         <img className={style.imagen} src={image} alt='' />
         <h2 >Status:{status}</h2>
         <h2 >Species:{species}</h2>

      </div>


   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }


   }

}
export default connect(mapStateToProps, mapDispatchToProps)(Card)


