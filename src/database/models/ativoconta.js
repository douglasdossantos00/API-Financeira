const AtivoContaSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const AtivoContaTable = sequelize.define("AtivoConta", {
    qtdeAtivo: DataTypes.INTEGER,
  });

  AtivoContaTable.associate = (models) => {
    models.Conta.belongsToMany(models.Ativo, {
      as: 'ativos',
      through: AtivoContaTable,
      foreignKey: 'idConta',
      otherKey: 'codAtivo',
    });

    models.Ativo.belongsToMany(models.Conta, {
      as: 'contas',
      through: AtivoContaTable,
      foreignKey: 'codAtivo',
      otherKey: 'idConta',
    });
  };
  return AtivoContaTable;
};
module.exports = AtivoContaSchema;
