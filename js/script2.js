window.addEventListener("load", function () {

    vetAges = [10, 21, 31, 40];

    document.write(`<p>Média = ${avgAges(sumAges(vetAges)).toFixed(2)}</p>`);

    document.write(`<p>Maior idade = ${maxAge(vetAges)}</p>`);

    document.write(`<p>Ímpares = ${oddAges(vetAges)}</p>`); 

    document.write(`<p>Todos maiores de idade ? ${adultAge(vetAges)}</p>`);

    var idade = prompt("Digite a idade a ser comparada: ");

    document.write(`<p>Todas as idades maiores ou iguais a ${idade}? ${compareAge(vetAges, idade)}</p>`);

    document.write(`<p>Idades maiores ou iguais a ${idade}: ${compareListAge(vetAges, idade)}</p>`);

    document.write(`<p>A média das idades maiores ou iguais a ${idade} é ${avgListAge(vetAges, idade).toFixed(2)}</p>`);
});

sumAges = (vet) => {
    sum = 0;
    for (i = 0; i < vet.length; i++) sum += vet[i];
    return sum;
}

avgAges = (sum) => {
    return sum / vetAges.length;
}

oddAges = (vet) => {
    var aux2 = [];
    for (i = 0; i < vet.length; i++) {
        if (vet[i] % 2 != 0)
            aux2.push(vet[i]);
    }
    return aux2;
}

maxAge = (vet) => {
    var maior = 0;
    for (i = 0; i < vet.length; i++) {
        if (vet[i] > maior)
            maior = vet[i];
    }
    return maior;
}

adultAge = vet => {
    var aux = vet[0];
    for (i = 0; i < vet.length; i++) {
        (vet[i] >= 18) ? aux : aux++;
    }
    if (aux > 0) return false;
    return true;
}

compareAge = (vet, idade) => {
    var aux = vet[0];
    for (i = 0; i < vet.length; i++) {
        (vet[i] >= idade) ? aux : aux++;
    }
    if (aux > 0) return false;
    return true;
}

compareListAge = (vet, idade) => {
    var aux = [];
    for (i = 0; i < vet.length; i++) {
        if (vet[i] >= idade)
            aux.push(vet[i]);
    }
    return aux;
}

avgListAge = (vet, idade) => {
    var soma = 0;
    var cont = 1;
    for (i = 0; i < vet.length; i++) {
        if (vet[i] >= idade) {
            soma = soma + vet[i];
            cont++;
        }
    }
    return soma/(cont-1);
}



