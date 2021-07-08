#### 10. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:

![image](btnExcluir.gif)

- O botão deve estar na linha da tabela e deve possuir `data-testid="delete-btn"`.

- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global.

O que será testado:

```
- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="delete-btn"`
- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global
```

### Bônus

#### 11. Crie um botão para editar uma despesa da tabela contendo as seguintes características:

![image](btnEditar.gif)

- O botão deve estar dentro da linha da tabela e deve possuir `data-testid="edit-btn"`

- Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.

  - O formulário deverá ter os mesmos `data-testid` do formulário de adicionar despesa. Você pode reaproveitá-lo.

  - O botão para submeter a despesa para edição deverá conter **exatamente** o texto "Editar despesa"

  **Atenção**: o câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.

O que será testado:

```
- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="edit-btn"
- Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global
```

---
