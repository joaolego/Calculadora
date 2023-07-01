function qual(){
    var gasolina=document.querySelector('#gas')
    var etanol=document.querySelector('#eta')

    var resposta = gasolina.value/etanol.value

    if ((etanol.value/gasolina.value)<=0.7){
        document.querySelector('#res').innerHTML='Etanol'
    }else{
        document.querySelector('#res').innerHTML='Gasolina'
    }
}