import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Reservas_taxi', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  });

  export default sequelize; 