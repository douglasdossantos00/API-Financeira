const ContaSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const ContaTable = sequelize.define("Conta", {
    saldo: DataTypes.DECIMAL(10, 2),
  }, { tableName: 'Contas' });
  ContaTable.associate = (models) => {
    ContaTable.belongsTo(models.User, {
      foreignKey: 'idUser',
      as: 'user',
    });
  };
  return ContaTable;
};
module.exports = ContaSchema;
