import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';

import { renderWithRouterAndStore } from './testConfig';

const EMAIL_INPUT_TEST_ID = 'email-input';
const PASSWORD_INPUT_TEST_ID = 'password-input';
const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '123456';

afterEach(() => jest.clearAllMocks());

describe('1 - Crie uma página inicial de login com os seguintes campos e características:', () => {
  test('A rota para esta página deve ser \'/\'', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');
    expect(history.location.pathname).toBe('/');
  });

  test('Crie um local para que o usuário insira seu email e senha', () => {
    renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  test('Crie um botão com o texto \'Entrar\'', () => {
    renderWithRouterAndStore(<App />, '/');

    const button = screen.getByText(/Entrar/i);
    expect(button).toBeInTheDocument();
  });
});
