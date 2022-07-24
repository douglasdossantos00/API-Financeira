const sinon = require('sinon');
const { expect } = require('chai');
const ativoController = require('../../../src/controllers/ativoController');
const ativoService = require('../../../src/services/ativoService');

// teste get allAllAtivoService

const allAtivos = [
  {
    id: 1,
    codAtivo: 'ALPA4',
    qtdeAtivo: 99124,
    valor: '19.59',
  },
  {
    id: 2,
    codAtivo: 'MRFG3',
    qtdeAtivo: 300000,
    valor: '12.65',
  },
];

describe('Consulta todos os produtos com retorno da função getAllAtivo no Controllers', async () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(allAtivos);
    sinon.stub(ativoService, 'getAllAtivosService').resolves(allAtivos);
  });

  afterEach(() => {
    ativoService.getAllAtivosService.restore();
  });
  it('retorna um array', async () => {
    const products = await ativoController.getAllAtivosController(request, response);
    console.log('teste', products);
    expect(products).to.be.a('array');
    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});
