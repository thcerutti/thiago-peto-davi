# Cálculo de IMC

O objetivo aqui é calcular o Índice de Massa Corporal (IMC). O cálculo é feito da seguinte forma:

`IMC = Peso ÷ (Altura × Altura)`

Depois que o usuário informar o peso e a altura e clicar no botão "Calcular", será chamado um código JavaScript que fará o cálculo. Além do cálculo, também será gerado um diagnóstico sobre IMC.

## Estilo da página

Usei um estilo de CSS já pronto, que dá esse aspecto de pixel art na página, chamado [NES CSS](https://nostalgic-css.github.io/NES.css/).

## Modificações a serem feitas

O cálculo é feito e retorna um número com várias casas decimais, como por exemplo `30.323342589932647`.

Quero que vcs alterem o código que calcula o IMC de forma que tenhamos como resultado apenas 2 casas decimais (ex.: `30.32`, não se preocupem com arredondamento). Lembram de como vcs me mostraram que formataram. 

Existem [vários métodos](https://www.w3schools.com/jsref/jsref_tofixed.asp) que podem ser usados para obter esse resultado, fica a dica ;) 