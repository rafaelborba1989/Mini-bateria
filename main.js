/*Para a função abaixo, por ser uma função generica quer sera chamada para realizar a execução de diferentes recursos do codigo html,
será necessario o uso de parametros. Parametros esses que diram qual será o recurso html que será executado */
function tocarSom (idElementoAudio) {

   const elemento =  document.querySelector(idElementoAudio);

   if(elemento === null){
        console.log('Elemento não encontrado!')
   }else{
        elemento.play();   
   }
}

/*O uso do 'querySelectorAll' permmite que selecionemos um conjunto de elementos, 
que nesse caso serão guardados dentro de uma variavel constante, onde poderemos acessar cada um desses elementos 
utilizando os devidos recussos necessarios para tal fim*/ 
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    let teclas  =  listaDeTeclas[contador]; //armazenando a lista de teclas juntamente com o contador aplicado em variave(otimização de codigo)

    let instrumentos = teclas.classList[1]; /*utilizando o 'classList' é possivel selecionar qual trecho da escrita da classe
     pode ser selecionado para manipulação separada do restante da frase que identifica a classe. Esse(s) trecho(s) selecionado(s) 
     são aramzenados em variavel dinamica declatada com 'let'*/

    let idAudio = `#som_${ instrumentos }`;

    teclas.onclick = function () {
        tocarSom(idAudio);
    }

    teclas.onkeydown = function (evento) {
       if(evento.code === 'Space' || evento.code === "Enter"){
         teclas.classList.add('ativa');
       }
    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }

}