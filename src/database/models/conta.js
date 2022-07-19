const ContaSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const ContaTable = sequelize.define("Conta", {
    saldo: DataTypes.DECIMAL(10, 2),
  });
  ContaTable.associate = (models) => {
    ContaTable.belongsTo(models.Cliente, {
      foreignKey: 'idCliente',
      as: 'cliente',
    });
  };
  return ContaTable;
};
module.exports = ContaSchema;
