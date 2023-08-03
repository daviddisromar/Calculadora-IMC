
const calcular = document.getElementById('calcular');


function imc(){

  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const result = document.getElementById('result');

  if(nome !=='' && altura !=='' && peso !==''){
    const valorIMC = (peso / (altura * altura)).toFixed(1);
    let retorno = '';
    if(valorIMC < 18.5){
      retorno = 'abaixo do peso.';
    }else if(valorIMC < 25){
      retorno = 'com peso ideal. Parabéns!';
    }else if(valorIMC < 30){
      retorno = 'levemente acima do peso.';
    }else if(valorIMC < 35){
      retorno = 'com obesidade grau I.';
    }else if(valorIMC < 40){
      retorno = 'obesidade grau II.';
    }else{
      retorno = 'com obesidade grau III. Cuidado!';
    }

    result.textContent = `${nome} seu IMC é ${valorIMC} e você está ${retorno}`;

  }else{
    result.textContent = 'Preencha todos os campos!';
  }
}

calcular.addEventListener('click', imc);