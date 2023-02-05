
let chaveServidor ="cebcd482eda57fa9a6714c1c2ba91885"

function cliqueiNoBotao(){
    let cidadeCatch = document.querySelector(".input-cidade").value


    buscarCidade(cidadeCatch)
}

async function buscarCidade(cidadeCatch){
    let dadosCidade = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
     + cidadeCatch + "&appid=" + chaveServidor + "&lang=pt_br" + "&units=metric")
     .then(resposta => resposta.json())

    
    mostrarInfoClima(dadosCidade)
}

function mostrarInfoClima(dadosCidade) {
   document.querySelector(".nomecidade").innerHTML = "Tempo Em "  + dadosCidade.name + " - " +dadosCidade.sys.country
   document.querySelector(".temp").innerHTML =  Math.floor(dadosCidade.main.temp) + "°C"
   document.querySelector(".titulo-temp").innerHTML = "Temperatura: "
   document.querySelector(".descricao").innerHTML = dadosCidade.weather[0].description
   document.querySelector(".titulo-umid").innerHTML = "Umidade: "
   document.querySelector(".umidade").innerHTML = dadosCidade.main.humidity + "%" 
   document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dadosCidade.weather[0].icon + ".png"  
   
    console.log(dadosCidade)
}