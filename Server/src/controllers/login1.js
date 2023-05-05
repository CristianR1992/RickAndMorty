const {User}= require('../DB_connection')
require("dotenv").config(); // process.env

const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const login1 = (req,res) =>{
const { email, password} = req.query;
try {
    if(!email || !password) res.status(400).send("Faltan datos")
    if(email !== DB_EMAIL)  res.status(404).send("Usuario no encontrado")
    if(password !== DB_PASSWORD)res.status(403).send("Contraseña incorrecta")
    else{
        res.status(200).json({ access: true })
    }
} catch (error) {
    return res.status(500).json({error: error.message})
    
}
}


module.exports = login1;