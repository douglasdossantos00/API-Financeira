module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AtivosContas', {
      codAtivo: {
        type: Sequelize.STRING(10),
        allowNull: false,
        references: {
          model: 'Ativos',
          key: 'codAtivo',
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
