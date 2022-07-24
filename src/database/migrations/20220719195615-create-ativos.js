module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ativos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      codAtivo: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      qtdeAtivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Ativos');
  },
};
