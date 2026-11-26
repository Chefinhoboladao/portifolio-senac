# JavaScript: formulários e eventos

Programas com `addEventListener` e manipulação do DOM.

| Exercício | O que pratica |
|---|---|
| [Dobro de um número](dobro/index.html) | Calcula o dobro do número digitado. |
| [Cinema JS](cinema/index.html) | Converte a duração de um filme em horas e minutos. |
| [Farmácia](farmacia/index.html) | Na compra de duas unidades, os centavos do total são desconto. |
| [Lan house](lan-house/index.html) | Cobra cada fração de 15 minutos por inteiro. |
| [Restaurante por quilo](restaurante/index.html) | Calcula o valor pelo peso consumido. |
| [Supermercado](supermercado/index.html) | Leve 3 e ganhe 50% em uma unidade. |
| [Revenda de veículos](revenda-de-veiculos/index.html) | Entrada de 50% e saldo em 12 vezes. |
| [Caixa eletrônico](caixa-eletronico/index.html) | Separa o saque em notas de 100, 50 e 10. |
| [Fuso horário](fuso-horario/index.html) | Mostra a hora na França (5 horas à frente). |
| [Situação do aluno](situacao-do-aluno/index.html) | Média de duas notas com aprovação, recuperação ou reprovação. |
| [Par ou ímpar](par-ou-impar/index.html) | Operador ternário. |
| [Parquímetro](parquimetro/index.html) | R$ 1,00 = 30 min, R$ 1,75 = 60 min, R$ 3,00 = 120 min. |
| [Peso ideal](peso-ideal/index.html) | Estimativa a partir da altura em metros (22 ou 21 x altura²). |
| [Raiz quadrada](raiz-quadrada/index.html) | Informa se o número tem raiz exata. |
| [Menu de opções](menu-de-opcoes/index.html) | Estrutura switch/case. |
| [Triângulo](triangulo/index.html) | Verifica os lados e o tipo de triângulo. |
| [Radar de velocidade](velocidade/index.html) | Sem multa, multa leve (até 20% acima) ou grave. |

## Correções aplicadas

- **Dobro de um número:** Entrada passou a aceitar apenas números.
- **Cinema JS:** Texto do resultado.
- **Farmácia:** Preço aceita apenas números; Valor formatado.
- **Restaurante por quilo:** Comentário que aparecia na tela removido.
- **Supermercado:** Preço aceita apenas números.
- **Revenda de veículos:** Parcela exibida com 2 casas decimais.
- **Caixa eletrônico:** A página HTML estava vazia e foi criada; Quantidade de notas calculada errada; Rótulos mostravam sempre R$ 100; `preventDefault` não era chamado.
- **Fuso horário:** A página não carregava o JavaScript; Cálculo errado quando passava da meia-noite.
- **Situação do aluno:** Erro de digitação que travava o programa (`queryselector`); Condições de recuperação e reprovação reescritas.
- **Par ou ímpar:** Variáveis declaradas duas vezes (o programa não rodava).
- **Parquímetro:** A página não encontrava o JavaScript; Valor abaixo de R$ 1,00 mostrava resultado errado; Formatação do troco.
- **Peso ideal:** Opções de sexo sem rótulo; Caminhos de arquivos corrigidos.
- **Raiz quadrada:** Botão com atributo inválido, agora com o texto Calcular.
- **Menu de opções:** Apertar Enter recarregava a página.
- **Triângulo:** A página não encontrava o JavaScript; Resultado antigo continuava na tela.
- **Radar de velocidade:** A página não encontrava o JavaScript; Multa leve e multa grave estavam invertidas.
