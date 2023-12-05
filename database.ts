import { Sequelize } from 'sequelize';
import path from 'path';

const dbPath = path.join(__dirname, '../dev/sqlite/dev.sqlite'); // Use an absolute path

const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  storage: dbPath,
  logging: console.log,
  
});

export default sequelize;
