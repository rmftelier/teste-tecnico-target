//1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);


//2



//3



//4
const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

//Cálculo do valor total mensal 
let valorTotal = 0;
for (const valor of Object.values(faturamentoMensal)) {
  valorTotal += valor;
}
console.log("Valor total mensal:", valorTotal.toFixed(2));

//Cálculo e exibição do percentual de cada estado
console.log("Percentual de representação por estado:");
for (const estado in faturamentoMensal) {
  const percentual = (faturamentoMensal[estado] / valorTotal) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}


//5


