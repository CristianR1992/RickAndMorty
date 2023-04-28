import Card from '../Card/Card'
import style from './Cards.module.css'

export default function Cards({ characters , onClose}) {
  
  return (
    <div className={style.container}>
      {
        characters.map(({ name, species, origin, status, gender, image, id }) => {
          
          return (
            <Card
              name={name}
              species={species}
              origin={origin?.name}
              status={status}
              gender={gender}
              image={image}
              onClose={()=>onClose(id)}
              key={id}
              id= {id}
           
            />
          );

        })}
    </div>
  );
}

