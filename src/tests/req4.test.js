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

describe('4 - Crie uma página para sua carteira com as seguintes características:', () => {
  test('A rota para esta página deve ser \'/carteira\'', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/carteira');
    const email = screen.queryByTestId('email-input');
    expect(email).toBeNull();
  });

  test('O componente deve se chamar Wallet e estar localizado na pasta "src/pages"', () => {
    const { container } = renderWithRouterAndStore(<Wallet />, '/carteira', {});
    expect(container).toBeDefined();
  });
});

