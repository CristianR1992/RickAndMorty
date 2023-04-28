let myFavorites = []


const postFav = (req, res) => {
    try {
        const character = req.body // se podria directamente pushear el req.body, pero lo hacmeos asi para que sea mas descriptivo de que me estoy guandando 

        const characterFound = myFavorites.find(fav => fav.id === character.id)
        if (characterFound) throw Error('Ya existe ese personaje en favoritos')
        myFavorites.push(character)
        return res.status(200).json(myFavorites)
    }

    catch (error) {
        return res.status(404).send(error.message)
    }

}

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites = myFavorites.filter(fav =>
        fav.id !== +id)

    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}
