const {getCharById} = require('../controllers/getCharById')
const {postFav, deleteFav} = require ('../controllers/handleFavorites')
const {login} = require ('../controllers/login')


const router = require('express').Router()


router.get('/character/:id',(req,res)=>{ // estas seria para uqe se entienda, pero seria lo mismo llamar a getByCharId, como hice en el deleteFav
    getCharById(req, res)
} )

router.get ("/login",(req,res)=>{
    login(req, res)} )

router.post('/fav',(req,res)=>{
    postFav(req, res)} )

router.delete('/fav/:id',deleteFav) 


module.exports= router