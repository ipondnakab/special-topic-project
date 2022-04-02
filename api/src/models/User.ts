import sequelize from "../database";
import * as Sequelize from "sequelize";

export const tableName = "user";
const User = sequelize.define(
  tableName,
  {
    firstName: {
      type: Sequelize.STRING,
      field: "first_name", // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
  }
);
User.sync({ force: true });

export default User;
