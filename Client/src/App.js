import Cards from './components//Cards/Cards';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components//Favorites/Favorites';


import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from './components/Background/Background';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  let EMAIL = "pepe@hotmail.com";
  let PASSWORD = "1234567";

  async function login(userData) {

    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const { email, password } = userData;
      const { data } = await axios.get(URL + `?email=${email}&password=${password}`)

      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      throw new Error(error);
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = async (id) => {
    const URL_BASE = 'http://localhost:3001/rickandmorty/character';
    // const API_KEY = '66a0bdb74977.b0243047a690964c64f4';
    try {
      const { data } = await axios(`${URL_BASE}/${id}`)
      if (data.name)
        setCharacters((oldChars) => [...oldChars, data]);

    }
    catch {
      alert("Personaje no encontrado")
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (

    <div >
      <div>
        {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} setAccess={setAccess} />}

        <Routes>
          <Route path='/home' element={<Cards characters={characters}
            onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
        <Background />

      </div>
    </div>
  );
}

export default App;
