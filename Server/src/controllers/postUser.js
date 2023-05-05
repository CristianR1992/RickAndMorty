const {User} = require('../DB_connection')


const postUser = async(req,res)=>{
const { email, password} = req.body
try {

 if(!email || !password) res.status(400).json("Faltan datos")

 const newUser = User.create({
    email,
    password
 })   
 return res.status(200).json(newUser)
} catch (error) {
    return res.status(500).json({error: error.message})
}
}

module.exports = postUser;