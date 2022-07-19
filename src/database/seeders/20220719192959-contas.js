module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Contas', [
      {
        saldo: 0,
        idCLiente: 1,
      },
      {
        saldo: 0,
        idCLiente: 2,
      },
      {
        saldo: 0,
        idCLiente: 3,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Contas', null, {});
  },
};
