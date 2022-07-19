module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Ativos', [
      {
        codAtivo: 'ALPA4',
        qtdeAtivo: 100000,
        valor: 19.59,
      },
      {
        codAtivo: 'MRFG3',
        qtdeAtivo: 300000,
        valor: 12.65,
      },
      {
        codAtivo: 'EMBR3',
        qtdeAtivo: 1000,
        valor: 12.67,
      },
      {
        codAtivo: 'ITUB4',
        qtdeAtivo: 500000,
        valor: 23.38,
      },
      {
        codAtivo: 'PETR4',
        qtdeAtivo: 500,
        valor: 29.18,
      },
      {
        codAtivo: 'VALE3',
        qtdeAtivo: 3500000,
        valor: 68.88,
      },
      {
        codAtivo: 'PRIO3',
        qtdeAtivo: 100,
        valor: 22.36,
      },
      {
        codAtivo: 'OIBR3',
        qtdeAtivo: 500,
        valor: 1.00,
      },
      {
        codAtivo: 'BBAS3',
        qtdeAtivo: 1000,
        valor: 35.00,
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ativos', null, {});
  },
};
