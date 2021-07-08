import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import { response as mockData, initialStateHeader, initialStateWithExpenses } from './mockData';
import App from '../App';
import Wallet from '../pages/Wallet';

import { renderWithRouterAndStore } from './testConfig';

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
});

const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

afterEach(() => jest.clearAllMocks());

describe('9 - Desenvolva uma tabela com os gastos contendo as seguintes características:', () => {
  const initial = initialStateWithExpenses;

  test('A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const thDescricao = screen.getByRole('columnheader', { name: 'Descrição' });
    const thTag = screen.getByRole('columnheader', { name: 'Tag' });
    const thMetodo = screen.getByRole('columnheader', { name: 'Método de pagamento' });
    const thValor = screen.getByRole('columnheader', { name: 'Valor' });
    const thMoeda = screen.getByRole('columnheader', { name: 'Moeda' });
    const thCambio = screen.getByRole('columnheader', { name: 'Câmbio utilizado' });
    const thValorConvertido = screen.getByRole('columnheader', { name: 'Valor convertido' });
    const thMoedaConversao = screen.getByRole('columnheader', { name: 'Moeda de conversão' });
    const thEditarExcluir = screen.getByRole('columnheader', { name: 'Editar/Excluir' });

    expect(thDescricao).toBeInTheDocument();
    expect(thTag).toBeInTheDocument();
    expect(thMetodo).toBeInTheDocument();
    expect(thValor).toBeInTheDocument();
    expect(thMoeda).toBeInTheDocument();
    expect(thCambio).toBeInTheDocument();
    expect(thValorConvertido).toBeInTheDocument();
    expect(thMoedaConversao).toBeInTheDocument();
    expect(thEditarExcluir).toBeInTheDocument();
  });

  test('A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave expenses que vem do reducer wallet.', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    expect(screen.getAllByRole('cell', { name: 'Dez dólares' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Lazer' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Cartão de crédito' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '10' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Dólar Comercial' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '5.58' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '55.75' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Real' })[0]).toBeInTheDocument();

    expect(screen.getAllByRole('cell', { name: 'Vinte euros' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Trabalho' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Dinheiro' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '20' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Euro' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '6.57' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '131.37' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Real' })[1]).toBeInTheDocument();
  });
});
