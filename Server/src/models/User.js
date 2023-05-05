const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
      //type:DataTypes.UUID    es el tipo id hash, tipo serail 64465sd 5s4ds5a4 5a4sd
      //defaultValue: UUIDV4    si no le paso uno, automaticamente se le crea 
         type:DataTypes.INTEGER,
         allowNull:false, // que este campo no venga vacio
         primaryKey:true
      },
      email:{
         type:DataTypes.STRING,
         allowNull:false,
         isEmail:true
      },
      password:{
         type:DataTypes.STRING(64), // le pones el limite que sea 64 caracteres
         allowNull:false
      }
   }, { timestamps: false });
};
