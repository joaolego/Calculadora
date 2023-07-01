function circulo(){
    var raio=document.querySelector('#rai')

    var resposta= 3.14 *raio.value * raio.value

    document.querySelector('#res').innerHTML = resposta
}