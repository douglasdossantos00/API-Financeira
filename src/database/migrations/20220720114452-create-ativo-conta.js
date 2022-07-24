module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AtivosContas', {
      idAtivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Ativos',
          key: 'id',
        },
      },
      idConta: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Contas',
          key: 'id',
        },
      },
      qtdeAtivo: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('AtivosContas');
  },
};
