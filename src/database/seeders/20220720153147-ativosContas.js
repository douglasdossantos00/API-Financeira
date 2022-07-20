module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('AtivosContas', [
      {
        idAtivo: 1,
        idConta: 1,
        qtdeAtivo: 100,
      },
      {
        idAtivo: 1,
        idConta: 2,
        qtdeAtivo: 100,
      },
      {
        idAtivo: 2,
        idConta: 2,
        qtdeAtivo: 100,
      },
      {
        idAtivo: 1,
        idConta: 3,
        qtdeAtivo: 100,
      },
      {
        idAtivo: 2,
        idConta: 3,
        qtdeAtivo: 100,
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('AtivosContas', null, {});
  },
};
