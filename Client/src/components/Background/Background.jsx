import React from 'react';
import style from'./Background.module.css';
import styleImagen from './ImagenFija.module.css';
import rick from './rick.png'

const Background = () => {
  return (
    <div className={style.background}>
      <img src={rick} alt="" className={styleImagen["imagen"]} />
    </div>
  );
};


export default Background;