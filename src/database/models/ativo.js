const AtivoSchema = (sequelize, DataTypes) => {
  // eslint-disable-next-line quotes
  const AtivoTable = sequelize.define("Ativo", {
    codAtivo: DataTypes.STRING(10),
    qtdeAtivo: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10, 2),

  });

  return AtivoTable;
};
module.exports = AtivoSchema;
