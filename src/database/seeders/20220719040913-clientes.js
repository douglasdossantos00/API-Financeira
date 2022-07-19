module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Clientes', [
      {
        email: 'guilherme.benchimol@xp.com.br',
        senha: 'Xp1234',
      },
      {
        email: 'marcelo.maisonnave@xp.com.br',
        senha: 'Xp1234',
      },
      {
        email: 'douglas.santos@xp.com.br',
        senha: 'Xp1234',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
