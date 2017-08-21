var clear, input, frn, cel, result;
var fatocel = (input-32)/9*5;
var celtofa = input*9/5+32;
fatocel.getElementById("frn").addEventListener("click", function Hesabla_fotocel(){
    p.result.innerHtml=(fatocel.value-32)*5/9 +"C"; 
}
celtofa.getElementById("cel").addEventListener("click", function Hesabla_celtofa(){
      p.result.innerHtml=(celtofa.value*9/5+32 +"F"
    
}
