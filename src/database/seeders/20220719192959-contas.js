module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Contas', [
      {
        saldo: 10000,
        idUser: 1,

      },
      {
        saldo: 30000,
        idUser: 2,
      },
      {
        saldo: 0,
        idUser: 3,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Contas', null, {});
  },
};
