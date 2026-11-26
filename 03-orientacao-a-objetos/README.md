# Orientação a objetos

Classes, herança, encapsulamento e polimorfismo em JavaScript.

Como executar: `node carrinho.js` (ou o nome de outro arquivo).

| Exercício | O que pratica |
|---|---|
| [Prototype](prototype.js) | Como objetos herdam métodos. |
| [Carro](carro.js) | Classe, atributos e métodos. |
| [Procedural x POO](procedural-x-poo.js) | O mesmo problema nas duas abordagens. |
| [Livro](livro.js) | Método com regra de limite. |
| [Animal](animal.js) | Herança, polimorfismo e método estático. |
| [Funcionário e gerente](funcionario.js) | Herança com `super`. |
| [Conta bancária](conta-bancaria.js) | Campos privados e getter. |
| [Lâmpada inteligente](lampada-inteligente.js) | Getter e setter com validação. |
| [Processador de pagamento](processador-de-pagamento.js) | Abstração com métodos privados. |
| [Carrinho de compras](carrinho.js) | Herança, polimorfismo e validação. |

## Correções aplicadas

- **Carro:** Mensagem com letra trocada.
- **Livro:** Chaves no lugar errado causavam erro de sintaxe; Exemplo de uso adicionado.
- **Funcionário e gerente:** Erro ao chamar um método de gerente em um funcionário comum; Nomes de exemplo trocados.
- **Conta bancária:** O saque acontecia mesmo com a senha errada; Exemplo de uso adicionado.
- **Lâmpada inteligente:** `constructor` digitado errado: o brilho inicial era ignorado.
- **Processador de pagamento:** Validade do cartão de teste estendida (venceria em 31/12/2026).
