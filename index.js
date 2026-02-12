//A funcção recebe como parâmetro o número de VITÓRIAS e de DERROTAS - nessa ordem.
getRank(15,30)

//1. A função getRank funciona como uma "main", retornando os valores de saldo de vitórias e rank do jogador
//Imprime saída
function getRank(wins,losses){
    let finalRecord = calculateRecord(wins, losses);
    let rank = getLevel(finalRecord);
        console.log(`O Herói tem de saldo de ${finalRecord} está no nível de ${rank}`);
}

//2. Função para cacular o saldo de vitórias do jogador
//Verifica se a soma resulta em um valor numérico
function calculateRecord(wins,losses){
    let winLossRecord = wins - losses;
    if (isNaN(winLossRecord)){
        winLossRecord = "ERROR"
    }
        return winLossRecord;
}

//3. Função para decidir o rank do jogador
//Verifica se o "finalRecord" for igual a "ERROR" e devolve outro "ERROR" no level
function getLevel(finalRecord){
    let level;
    if (finalRecord === "ERROR"){
        level = "ERROR"
    }
    else if (finalRecord < 11){
        level = "Ferro"
    }
    else if (finalRecord < 21){
        level = "Bronze"
    }
    else if (finalRecord < 51){
        level = "Prata"
    }
    else if (finalRecord < 81){
        level = "Ouro"
    }
    else if (finalRecord < 101){
        level = "Diamante"
    }
    else{
        level = "Imortal"
    }
        return level;
}