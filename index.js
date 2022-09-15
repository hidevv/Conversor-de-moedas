function Euro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorElementoEmNumerico = parseFloat(valor);
  
    var valorEmEuro = valorElementoEmNumerico * 5;
    console.log(valorEmEuro);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Sua conversão em Euro é € " + valorEmEuro;
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  function BitCoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorElementoEmNumerico = parseFloat(valor);
  
    var valorEmBTC = valorElementoEmNumerico / 99366;
    console.log(valorEmBTC);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Sua conversão em BTC é ₿ " + valorEmBTC;
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  