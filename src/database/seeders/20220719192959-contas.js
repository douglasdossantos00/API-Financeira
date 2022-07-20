module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Contas', [
      {
        saldo: 10000,

      },
      {
        saldo: 30000,

      },
      {
        saldo: 0,

      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Contas', null, {});
  },
};
