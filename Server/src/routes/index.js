const {getCharById} = require('../controllers/getCharById')
const {deleteFav} = require ('../controllers/deleteFav')
const {postFav} = require ('../controllers/postFav')
const {login1} = require('../controllers/login1')




const router = require('express').Router()


router.get('/character/:id',(req,res)=>{ // estas seria para uqe se entienda, pero seria lo mismo llamar a getByCharId, como hice en el deleteFav
    getCharById(req, res)
} )

router.get ("/login",login1 )

router.post('/login',postFav)

router.post('/fav',(req,res)=>{
    postFav(req, res)} )

router.delete('/fav/:id',deleteFav) 


module.exports= router