

// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../database';

// class User extends Model {
//     public id!: number;
//     public username!: string
//     public email!: string;
//     public password!: number;
//    }

// User.init({
//   username: {
//     type: DataTypes.STRING,
//     primaryKey: true, // Use primaryKey instead of autoIncrement for a string
//   },
//   email: {
//     type: DataTypes.STRING,
//   },
//   password: {
//     type: DataTypes.STRING,
//   },
// }, {
//   sequelize,
//   modelName: 'user',
//   timestamps: false
// });

// export default User;


import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init({
  username: { type: DataTypes.STRING, primaryKey: true, unique: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, {
  sequelize,
  modelName: 'user',
  timestamps: true,
});


export default User;

