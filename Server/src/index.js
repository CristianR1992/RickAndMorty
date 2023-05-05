const server = require('./app') // esta es la config de nuestro server
const PORT = 3001;
const { conn } = require('./DB_connection') // esta es la config de nuestro db 


conn.sync({force:true}) //levanta ls db y crea las tablas. 
.then(()=>
server.listen(PORT,()=>{
    console.log('Server raised in port: '+ PORT)
})
)

    