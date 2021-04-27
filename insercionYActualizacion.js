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
  firstName: 'Lionel',
  lastName: 'Messi',
  edad: '32'
}))
.then(jane => {
  console.log(jane.toJSON());
});

//actualiza registro
User.update({ edad: 26 }, {
    where: {
      lastName: 'Fisz'
    }
  }).then(() => {
    console.log("Done");
  });