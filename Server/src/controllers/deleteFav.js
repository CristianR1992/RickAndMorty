const { Favorite } = require('../DB_connection')


const deleteFav = async(req,res)=>{
try {
    const {id} = req.params
    if(!id) res.status(500).json("Falta ID")

    const char = await Favorite.findByPk(id);
    if(char){
        await Favorite.destroy({
            where: {
                id,
            }
        })
    }
    const favorites = await Favorite.findAll();
} catch (error) {
    return res.status(500).json({error:error.message})
    
}
}


module.exports = deleteFav;