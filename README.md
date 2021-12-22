## O projeto
Esse projeto foi feito com o intuito de calcular quantas latas de tinta serão necessárias para pintar 4 paredes de um certo cômodo. Nele, é possível botar a metragem de cada parede, com seu comprimento e altura, e também incluir portas e janelas, que nesse caso terão suas áreas subtraídas da área total de pintura.

As dimensões padrão das portas e janelas são respectivamente 0,80 x 1,90 e 2,00 x 1,20 metros.
Regras de negócio:
 - Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados, mas podem possuir alturas e larguras diferentes
 - O total de área das portas e janelas deve ser no máximo 50% da área de parede
 - A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta

[Link do site](https://digital-republic.vercel.app/)

`A maior parte da lógica do projeto está na página src/helpers/ e na src/pages/results`

## Como usar

Assim que usuário logar no site, irá aparecer um formulário que é composto por 4 passos, onde em cada passo o form deverá ser preenchido com as informações de cada uma das 4 paredes. Nesse formulário também terão 4 inputs, um para a Altura da Parede, outro para o Comprimento e mais dois para a quantidade de portas e janelas. Uma vez preenchida as informações, será possível clicar no botão e partir para a próxima parede.
Quando todas as paredes tiverem suas informações preenchidas, o usuário será redirecionado para a tela de resultado, onde será mostrado quantas latas de tinta são necessárias para pintar o seu cômodo.

## Como foi desenvolvido

Esse aplicação foi desenvolvida com o framework NextJS com TypeScript, usando a biblioteca de estilização Material UI. Além disso também foi utilizado a biblioteca Formik para melhorar a experiência do usuário e facilitar a validação dos inputs.

- NextJS
- TypeScript
- MaterialUI
- Formik

## Como fazer a aplicação rodar

Para usar a aplicação, é necessário usar a sequência de comandos abaixo:

`yarn`
`yarn dev`

ou para NPM

`npm install`
`npm start`

## Maiores desafios

- 1º Fazer a validação dos dados, com todas as limitações existentes
- 2º Trazer a melhor experiência de usuário, refatorando algumas vezes o código para trazer uma melhor solução
- 3º Fazer a lógica final, calculando as latas de tinta, onde foi utilizado um Reduce e uma função recursiva(que depois foi alterado pra um do While)

## Observações

- Durante o código foram feitas observações para melhor compreenção da minha lógica/escolha, estas observações se encontram no início do `src/helpers/index.ts` e no meio da função `latasDeTinta` na `src/resultado/index.ts`
- As outras observações são de menor importância e podem ser lidas durante a compreenção do código