# HTML e CSS

Primeiras páginas: estrutura, seletores, box model e cartões.

| Exercício | O que pratica |
|---|---|
| [Viagem a Marte](viagem-a-marte/index.html) | Títulos, parágrafos e listas. |
| [Páginas e links](paginas-e-links/index.html) | Navegação entre páginas. |
| [Seletores](seletores/index.html) | Seletores de classe. |
| [CSS inline](formas-de-usar-css/inline.html) | Estilo direto na tag. |
| [CSS na página](formas-de-usar-css/na-pagina.html) | Estilo dentro de `<style>`. |
| [CSS importado](formas-de-usar-css/importado.html) | Arquivo `.css` separado e prioridade do inline. |
| [Cartão de boas-vindas](cartao-boas-vindas/index.html) | Box model com padding, borda e margem. |
| [Cartão de perfil](cartao-de-perfil/index.html) | Primeiro cartão com CSS externo. |
| [Perfil social (versão 1)](perfil-social-v1/index.html) | Cartão com avatar, habilidades e botões. |
| [Perfil social (versão 2)](perfil-social-v2/index.html) | Evolução do cartão com CSS separado. |
| [Cartão de produto](cartao-de-produto/index.html) | Vitrine com preço antigo e atual. |
| [Box model](box-model/index.html) | Padding, borda e margem em caixas aninhadas. |
| [Notícia](noticia/index.html) | Tags semânticas `article` e `footer`. |

## Correções aplicadas

- **Viagem a Marte:** Imagem que não existia na pasta trocada por um desenho próprio (SVG); Título da aba e acentuação.
- **Páginas e links:** Links quebrados corrigidos e página inicial criada (ela não estava na pasta); Imagens ausentes trocadas por desenhos próprios.
- **Seletores:** Seletor CSS que não pegava nenhum elemento (`cor-fundo` → `.cor`).
- **CSS inline:** Marcação inválida removida dos parágrafos.
- **CSS importado:** `font-size` com valor inválido.
- **Cartão de boas-vindas:** Título da aba e texto.
- **Perfil social (versão 1):** Foto de banco de imagens trocada por um avatar próprio; Rótulos que quebravam de linha; Texto da descrição e grafia de TypeScript.
- **Perfil social (versão 2):** `<div>` sem fechamento; `margin-top` sem unidade, que deixava a foto fora do lugar; Foto trocada por avatar próprio.
- **Cartão de produto:** Imagem ausente trocada por desenho próprio; Estilo do desconto e dos preços completado.
- **Box model:** Caixas que se sobrepunham; Borda sem estilo (não aparecia).
- **Notícia:** Nome de outra pessoa removido do rodapé.
