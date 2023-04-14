import React from 'react';
import style from'./Background.module.css';

const Background = ({children}) => {
    return (
        <div className={style.background}>
          <video autoPlay muted loop preload="auto" className={style.video}>
            <source src={require('./video.mp4')} type="video/mp4" />
          </video>
          {children}
        </div>
      );
    };
    
    

export default Background;