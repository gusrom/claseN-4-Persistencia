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
  
  
  
  /* crea usuarios*/
sequelize.sync()
.then(() => User.bulkCreate([
    {firstName: 'Javier',lastName: 'Mascherano',edad: '38'},
    {firstName: 'Gonzalo',lastName: 'Higuain',edad: '35'},
    {firstName: 'Gabriel',lastName: 'Batistuta',edad: '50'}]

)
)
.then(jane => {
  console.log(jane.toJSON());
});

/* Actualiza varios registros*/
User.update({ edad: 33 }, {
    where: {
      edad: '32'
    }
  }).then(() => {
    console.log("Done");
  });