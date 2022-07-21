const UserSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const UserTable = sequelize.define("User", {
    email: DataTypes.STRING,

    senha: DataTypes.STRING,

  });
  UserTable.associate = (models) => {
    UserTable.hasOne(models.Conta, {
      foreignKey: 'id',
      as: 'conta',
    });
  };
  return UserTable;
};
module.exports = UserSchema;
