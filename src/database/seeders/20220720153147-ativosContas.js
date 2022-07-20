module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('AtivosContas', [
      {
        codAtivo: 'ITUB4',
        idConta: 1,
        qtdeAtivo: 100,
      },
      {
        codAtivo: 'ITUB4',
        idConta: 2,
        qtdeAtivo: 100,
      },
      {
        codAtivo: 'VALE3',
        idConta: 2,
        qtdeAtivo: 100,
      },
      {
        codAtivo: 'ITUB4',
        idConta: 3,
        qtdeAtivo: 100,
      },
      {
        codAtivo: 'PRIO3',
        idConta: 3,
        qtdeAtivo: 100,
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('AtivosContas', null, {});
  },
};
