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

describe('2 - Realize as seguintes verificações nos campos de email, senha e botão:', () => {
  test('O botão de "Entrar" está desabilitado ao entrar na página', () => {
    renderWithRouterAndStore(<App />, '/');

    const button = screen.getByText(/Entrar/i);
    expect(button).toBeDisabled();
  });

  test('O botão de "Entrar está desabilitado quando um email inválido é digitado', () => {
    renderWithRouterAndStore(<App />, '/');

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByText(/Entrar/i);

    userEvent.type(email, 'email');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'email@com@');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'emailcom@');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'alguem@email.');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();
  });

  test('O botão de "Entrar está desabilitado quando uma senha inválida é digitada', () => {
    renderWithRouterAndStore(<App />, '/');

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByText(/Entrar/i);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(senha, '23456');
    expect(button).toBeDisabled();
  });

  test('O botão de "Entrar" está habilitado quando um email e uma senha válidos são passados', () => {
    renderWithRouterAndStore(<App />, '/');

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByText(/Entrar/i);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeEnabled();
  });
});
