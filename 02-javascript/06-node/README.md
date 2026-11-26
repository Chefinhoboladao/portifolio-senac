# JavaScript no terminal (Node.js)

Programas de console com `prompt-sync`.

Como executar:

```bash
npm install
node soma.js
```

| Exercício | O que pratica |
|---|---|
| [Soma](soma.js) | Soma dois números. |
| [Anos de Copa](copa-do-mundo.js) | Diz se houve Copa no ano informado. |
| [Etiquetas](etiquetas.js) | Imprime etiquetas em duas colunas. |
| [Média do aluno](media-do-aluno.js) | if/else com três notas. |
| [Parcelas](parcelas.js) | Divide um valor, com o resto na última parcela. |
| [Quadriênios](quadrienios.js) | 1% de acréscimo a cada 4 anos. |
| [Revenda](revenda.js) | Entrada e 12 parcelas. |
| [Veterinária](veterinaria.js) | Quantos dias dura um pacote de ração. |

## Correções aplicadas

- **Anos de Copa:** Parênteses fora do lugar na mensagem.
- **Etiquetas:** Imprimia o dobro de etiquetas pedidas.
- **Média do aluno:** Mensagens revisadas e rascunhos comentados removidos.
- **Parcelas:** Ponto e vírgula depois do `for` causava erro; Última parcela não incluía o resto.
- **Quadriênios:** Contava quadriênios incompletos.
- **Veterinária:** Faltava converter quilos em gramas.
