import Cards from './components//Cards/Cards';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About.jsx';
// import Error404 from './components/Error404.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites';


import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from './components/Background.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  let EMAIL = "pepe@hotmail.com";
  let PASSWORD = "1234567";

  const login = (userData) => {
    if (EMAIL === userData.email && PASSWORD === userData.password) {
      setAccess (true);
      navigate('/home')
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (id) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
    const API_KEY = '66a0bdb74977.b0243047a690964c64f4';
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (

    <div >
      <div>
        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} setAccess={setAccess}/>}
  
        <Routes>
          <Route path='/home' element={<Cards characters={characters}
            onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favorites' element={<Favorites />} />
          {/* <Route path="*" element={<Error404 />} />   */}
        </Routes>
      <Background />

      </div>
    </div>
  );
}

export default App;
