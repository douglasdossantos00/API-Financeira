module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Contas', [
      {
        saldo: 10000,
        idCliente: 1,

      },
      {
        saldo: 30000,
        idCliente: 2,
      },
      {
        saldo: 0,
        idCliente: 3,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Contas', null, {});
  },
};
