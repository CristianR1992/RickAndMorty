import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css'
import style1 from './Botones.module.css'


const Nav=({onSearch, setAccess})=> {

  const logOut =()=>{
      setAccess(false);
      
  }
  return (
    <nav  className={style.nav}>
    <div style={{flexGrow: 1}}>

      <button className={style1.botones}> 
        <Link to='/about'style={{ textDecoration: 'none' }}>About</Link></button>

        <button className={style1.botones}> 
         <Link to='/home'style={{ textDecoration: 'none' }}>Home</Link>
        </button>

        <button className={style1.botones}><Link to='/favorites'style={{ textDecoration: 'none' }}>Favorites</Link></button>

        <button className={style1.botones} onClick={logOut}>Log Out</button>
        
     </div>
     
        <SearchBar  onSearch={onSearch}/>  
       
    </nav>
  );
}

export default Nav;
