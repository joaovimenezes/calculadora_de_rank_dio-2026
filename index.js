//A funcção recebe como parâmetro o número de VITÓRIAS e de DERROTAS - nessa ordem.
getRank(15,30)

function getRank(wins,losses){
    let record = wins - losses;
    let rank = getLevel(record);
        console.log(`O Herói tem de saldo de ${record} está no nível de ${rank}`);
}

function getLevel(record){
    const ranks = [
        {"name": "Ferro", "max": 10},
        {"name": "Bronze", "max": 21},
        {"name": "Prata", "max": 51},
        {"name": "Ouro", "max": 81},
        {"name": "Diamante", "max": 101},
        {"name": "Imortal", "max": Infinity},
    ]
    for (let rank of ranks){
        if (record <= rank.max){
            return rank.name;
        }
    }
}