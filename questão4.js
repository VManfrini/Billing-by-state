const faturamento = [
  "67836.43",
  "36678.66",
  "29229.88",
  "27165.48",
  "19849.53",
];

let soma = 0;
let porcentagem;

for (let i = 0; i < faturamento.length; i++) {
  soma = soma + parseFloat(faturamento[i]);
}

function calculoPorcentagem(estado) {
  porcentagem = parseInt((estado / soma) * 100);
  return porcentagem;
}

let pSp = calculoPorcentagem(faturamento[0]);
let pRj = calculoPorcentagem(faturamento[1]);
let pMg = calculoPorcentagem(faturamento[2]);
let pEs = calculoPorcentagem(faturamento[3]);
let pOutros = calculoPorcentagem(faturamento[4]);
alert(`O faturamento do estado de São Paulo representa aproximadamente ${pSp}%\n
O faturamento do estado do Rio de Janeiro representa aproximadamente ${pRj}%\n
O faturamento do estado de Minas Gerais representa aproximadamente ${pMg}%\n
O faturamento do estado do Espirito Santo representa aproximadamente ${pEs}%\n
O faturamento de outros estados representa aproximadamente ${pOutros}%`);
