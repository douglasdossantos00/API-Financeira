const AtivoSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const AtivoTable = sequelize.define("Ativo", {
    qtdeAtivo: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10, 2),

  });

  return AtivoTable;
};
module.exports = AtivoSchema;
