const URL = "https://rickandmortyapi.com/api/character"
const axios = require('axios')

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${URL}/${id}`)
        
        if (!data.name) throw new Error(`ID: ${id} Not Found`)
    
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }
        return res.status(200).json(character)

    }

    catch (error) { // hacemos esto para que el error lo agarre el catch. tanto el error 404 y el 500
        return error.message.includes('ID')
            ? res.status(500).send(error.message)
            : res.status(404).send("Not Found");
    }
}

module.exports = {
    getCharById
};






