const Sequelize = require('sequelize');

const sequelize = new Sequelize('usuarios', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class User extends Sequelize.Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING,
  edad:Sequelize.INTEGER
}, { sequelize, modelName: 'usuarios' });
  
  
  
  /* crea usuario*/
sequelize.sync()
.then(() => User.create({
  firstName: 'Sergio',
  lastName: 'Aguero',
  edad: '32'
}))
.then(jane => {
  console.log(jane.toJSON());
});

//elimina usuario con id =1
User.destroy({
    where: {
      id: 1
    }
  }).then(() => {
    console.log("Elimine Registro");
  });