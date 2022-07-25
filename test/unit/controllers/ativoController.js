const sinon = require('sinon');
const { expect } = require('chai');
const ativoController = require('../../../src/controllers/ativoController');
const ativoService = require('../../../src/services/ativoService');

// teste get allAllAtivoService

describe('Consulta todos os ativos com retorno da função getAllAtivo no Controllers', async () => {
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
    await ativoController.getAllAtivosController(request, response);
    expect(response.json.calledWith(allAtivos)).to.be.equal(true);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Consulta os ativos por id ', async () => {
  const request = { params: { codAtivo: 1 } };
  const response = {};
  before(() => {
    const ativo = {
      id: 1,
      codAtivo: 'ALPA4',
      qtdeAtivo: 99114,
      valor: '19.59',
    };
    sinon.stub(ativoService, 'getAtivoByIdService').resolves(ativo);
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(ativo);
  });

  after(() => {
    ativoService.getAtivoByIdService.restore();
  });
  it('retorna um objeto', async () => {
    await ativoController.getAtivoByIdController(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});
