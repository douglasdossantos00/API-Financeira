const AtivoContaSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const AtivoContaTable = sequelize.define("AtivoConta", {
    idConta: DataTypes.INTEGER,
    idAtivo: DataTypes.INTEGER,
    qtdeAtivo: DataTypes.INTEGER,
  }, { tableName: 'AtivosContas' });

  AtivoContaTable.associate = (models) => {
    models.Conta.belongsToMany(models.Ativo, {
      as: 'ativos',
      through: AtivoContaTable,
      foreignKey: 'idConta',
      otherKey: 'idAtivo',
    });

    models.Ativo.belongsToMany(models.Conta, {
      as: 'contas',
      through: AtivoContaTable,
      foreignKey: 'idAtivo',
      otherKey: 'idConta',
    });
  };
  return AtivoContaTable;
};
module.exports = AtivoContaSchema;
