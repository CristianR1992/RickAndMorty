const { Favorite } = require('../DB_connection')


const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;

    try {
        if (!name || !origin || !status || !image || !species || !gender) res.status(401).send("Faltan datos")
        const char = await Favorite.create({
            name,
            origin,
            status,
            gender,
            image,
            species
        })
        const favorites = await Favorite.find()
        return res.status(200).json(favorites)

    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}


module.exports = postFav;