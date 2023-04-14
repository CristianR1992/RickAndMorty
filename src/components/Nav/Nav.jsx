import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css'


const Nav=({onSearch, setAccess})=> {

  const logOut =()=>{
      setAccess(false);
      
  }
  return (
    <nav  className={style.nav}>
    <div style={{flexGrow: 1}}>

      <button className={style.botones}> 
        <Link to='/about'>About</Link></button>

        <button className={style.botones}> 
         <Link to='/home'>Home</Link>
        </button>

        <button className={style.botones}>
          <Link to='/favorites'>Favorites</Link>
        </button>

        <button className={style.botones} onClick={logOut}>Log Out</button>
        
     </div>
     
        <SearchBar  onSearch={onSearch}/>  
       
    </nav>
  );
}

export default Nav;
