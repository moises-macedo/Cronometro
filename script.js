//----------------chamando HMTL----------------//

const cronometro = document.querySelector('.cronometro');


//----------------criando cronometro----------------//

const contadora = (segundos) => {
    const data = new Date (segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {

        hour12:false,
        timeZone: 'UTC'
    });
}

//----------------formatando cronometro----------------//
let segundos = 0
let timer;

const cronometrandoRelogio = () => { 

    timer = setInterval(function(){
        segundos++;
        cronometro.innerText = contadora(segundos);
    }, 1000);
}

//----------------Evento dos Buttons----------------//

document.addEventListener('click', function(e){

    const el = e.target;

    if(el.classList.contains('iniciar')){

        clearInterval(timer);
        cronometrandoRelogio();
        cronometro.classList.remove('pausado');
    }
    if(el.classList.contains('pausar')){

        clearInterval(timer);
        cronometro.classList.add('pausado')
    }
    if(el.classList.contains('zerar')){

        clearInterval(timer);
        cronometro.innerText = '00:00:00';
        cronometro.classList.remove('pausado');
        segundos = 0

    }




})





