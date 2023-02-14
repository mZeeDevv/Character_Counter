let btn = document.getElementById('btn');
let textarea = document.getElementById('text');
let value = document.getElementById('value');
let para = document.getElementById('para');

textarea.onkeyup = function(){
     value.innerHTML = textarea.value.length;

     if(textarea.value.length == 50){
        para.style.color = "red"
     } else {
        para.style.color = "black"
     }
}