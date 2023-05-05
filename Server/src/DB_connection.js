require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const { Sequelize } = require('sequelize');
const FavoriteModel = require ('./models/Favorite')
const UserModel = require ('./models/User')



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`, // le indico a la base de datos que uso postgres
   { logging: false, native: false }
);

// ejecuto ls funcion pasandole por argumente la instancia
UserModel(sequelize);
FavoriteModel(sequelize)


// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!

const { Favorite, User} = sequelize.models ;
 User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });

module.exports = {
   Favorite,
   User,
 
   conn: sequelize,
};
