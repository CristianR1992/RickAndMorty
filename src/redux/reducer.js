import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.myFavorites, ...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload) // le hago filter a la unica propiedad que tengo 


            }
        case ORDER:
            const copiaAll = [...state.allCharacters];
            copiaAll.sort((a, b) => {
                if (action.payload === "A") {
                    return a.id - b.id
                } else {
                    return b.id - a.id
                }
            })
            return {
                ...state,
                myFavorites: [...copiaAll]

            }
            
        case FILTER:
            const copiaAllC = [...state.allCharacters].filter(character=>
                character.gender === action.payload
            )
            return {
                ...state,
                myFavorites: [...copiaAllC]

            }


        default:
            return { ...state }


    }

}

export default reducer;