
function inserir(num){
  document.querySelector(".tela").innerHTML += num;
} 

function limpar(){
  document.querySelector(".tela").innerHTML = "";
}
function apagar(){
 let tela = document.querySelector(".tela").innerHTML;
 document.querySelector(".tela").innerHTML = tela.substring(0, tela.length -1); 
}
function calcular(){
  let tela = document.querySelector(".tela").innerHTML;
  document.querySelector('.tela').innerHTML = eval(tela) 
  if(tela){
      document.querySelector('.tela').innerHTML = eval(tela)
  }
  else{
      document.querySelector(".tela").innerHTML = "Erro"
  }
}