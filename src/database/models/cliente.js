const ClienteSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const ClienteTable = sequelize.define("Cliente", {
    email: DataTypes.STRING,

    senha: DataTypes.STRING,

  });
  ClienteTable.associate = (models) => {
    ClienteTable.hasOne(models.Conta, {
      foreignKey: 'id',
      as: 'conta',
    });
  };
  return ClienteTable;
};
module.exports = ClienteSchema;
