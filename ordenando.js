const swap = (vetor, pos1, pos2) => {
    let temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
};

const shuffle = (vetor, quantidadeDeTrocas) => {
    const tamanho = vetor.length;
    for(let i = 0; i < quantidadeDeTrocas; i++){
        const pos1 = Math.floor(Math.random() * tamanho);
        const pos2 = Math.floor(Math.random() * tamanho);
        swap(vetor, pos1, pos2);
    }
};

const bubble_sort = (vetor) => {
    const n = vetor.length;
    for(let i = 0; i < n -1; i++){
        for(let j = 0; j < n - 1; j++){
            if(vetor[j] > vetor[j + 1]){
                swap(vetor, j ,j + 1)
            }
        }
    }
};

const selection_sort = ( vetor ) => {
    const n = vetor.length;
    for(let i = 0; i < n - 1; i++){
        let min_index = i;
        for(let j = i + 1; j < n; j++){
            if(vetor[j] < vetor[min_index]){
                min_index = j;
            }
        }
        if(min_index !== i){
            swap(vetor, i, min_index);
        }
    }
};

const particionamento = (vetor, inicio, fim) => {
    const pivo = vetor[fim];
    let i = (inicio - 1);

    for(let j = inicio; j <= fim - 1; j++){
        if(vetor[j] < pivo){
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return(i + 1);
};

const quick_sort = (vetor, inicio, fim) => {
    if(inicio < fim){
        const pi = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pi - 1);
        quick_sort(vetor, pi + 1, fim);
    }
};