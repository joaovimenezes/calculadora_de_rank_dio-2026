# Desafio de Criação de uma Calculadora de Partidas Rankeadas 🧮
Projeto do bootcamp "Blip - Lógica de Programação".

### Objetivo
O objetivo do desafio era a criação de uma calculadora de rank, elaborada com uma função que receberia como parâmetro a quantidade de vitórias e derrotas de um jogador, e depois disso retornasse o resultado para uma variável. Esse cálculo deveria ser feito pela subtração de vitórias - derrotas.

### Elaboração ✅
Nesse projeto foram usadas:

- Função `getRank` para a centralização das funções e exibição da mensagem, com o papel de uma função main. Ela foi elaborada com os parâmetros de **vitórias e derrotas** (wins, losses);
- Função `calculateRecord` para realização do cálculo do saldo de vitórias, com o parâmetro de **vitórias e derrotas** (wins, losses) e estrutura de decisão para erros;
- Função `getLevel` com o parâmetro de recorde de vitória (finalRecord) e uma estrutura de decisão "if, else if, else" que estabelece o rank de acordo com o intervalo do saldo de vitórias.

Destaca-se a divisão dessas funções para o armazenamento dos valores retornados em variáveis, identificação de erros e possibilidade de manutenção e escalabilidade. 

### Como executar o código
- Na utilização de uma IDE na máquina, instale o node.js;
- Chame a função `getRank` com dois parâmetros **NUMÉRICOS** para **VITÓRIAS e DERROTAS** respectivamente;
- Execute o comando "node index.js" no terminal da sua IDE.
