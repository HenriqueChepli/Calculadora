/*função inserir numero na tela de resultado*/
function inserir(num){
  document.querySelector(".tela").innerHTML += num; /*função que vai inserir o número, parâmetro num, selecionar tela para manipular e devolver o num. Uso do mais igual para concatenar*/
} 
/*função limpar tela de resultado*/
function limpar(){
  document.querySelector(".tela").innerHTML = ""; /*Quando acionar a função vai apresentar nada para tela de resultado*/
}
/*função apagar numero a direita na tela de resultado*/
function apagar(){
 let tela = document.querySelector(".tela").innerHTML;
 document.querySelector(".tela").innerHTML = tela.substring(0, tela.length -1); /*let tela vai guardar a .tela, depois document, buscar a .tela e passar o comando substring que vai extrair uma parte de uma string, e apagar 1 por vez*/
}
function calcular(){
  let tela = document.querySelector(".tela").innerHTML;
  document.querySelector('.tela').innerHTML = eval(tela) /*eval analisa a string fornecida e executa o código JavaScript contido nela,*/
  if(tela){
      document.querySelector('.tela').innerHTML = eval(tela) /*if, else para executar comando ou não*/
  }
  else{
      document.querySelector(".tela").innerHTML = "Erro"
  }
}