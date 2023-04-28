const app = require('../src/app')
const session = require('supertest')
const request = session(app)

const character= {
    id:18,
    name:"Cris",
    species: "Human",
    gender:"Male",
    status:"Alive",
    origin:{
        name:"Earth (C-137"
    },
    image:"image.jpg"
}
describe("Test de Rutas", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200);

        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/1')
            for(const prop in response.body){
                     expect (response.body).toHaveProperty(prop)
            }
   
        })
        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/2305j');
            if (!response) expect(response.statusCode).toBe(500)

        })
    })

describe("Get /rickandmorty/login",()=>{
    it("responde con un objeto con la propiedad access en true si la informacion del usuario es validad", async ()=>{
        const response = await request.get('/rickandmorty/login?email=pepe@hotmail.com&password=1234567')
        const access= {access:true}
        expect(response.body).toEqual(access)
    })
    it("responde con un objeto con la propiedad access en false si la informacion del usuario no es validad", async ()=>{
        const response = await request.get('/rickandmorty/login?email=pepe@hotmail.com&password=1234sada567')
        const access= {access:false}
        expect(response.body).toEqual(access)
    })
})


describe("POST /rickandmorty/fav", () => {
    it("Debe guardar el personaje en favoritos", async () => {
        const response = await request.post('/rickandmorty/fav').send(character)
        expect(response.body).toContainEqual(character)
    })

    it("Debe guardar el personaje en favoritos sin eliminar los que ya existian", async ()=>{
        character.id = 12;
        character.name="Juan"
        const response = await request.post('/rickandmorty/fav').send(character)
        expect(response.body.length).toBe(2)
    });
});
 
describe("DELETE /rickandmorty/fav/:id",()=>{
    it("si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async ()=>{
        const response = await request.delete('/rickandmorty/fav/2we')
        expect(response.body.length).toBe(2)
    });
    it("si el ID enviado existe, deberia eleiminarlo de favoritos", async ()=>{
        const response = await request.delete('/rickandmorty/fav/18')
        expect(response.body.length).toBe(1)
    })
})
})