function validarEmail(){
var email= document.getElementById("email".value);
var regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
if(regex.test(email)){
    alert("E-mail valido:" + email);
} else {
alert("Por favor, insira um e-mail valido");
return false;
 }
}