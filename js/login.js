var button= document.getElementById("button");
var email= document.getElementById("email");
var senha= document.getElementById("senha");
button.addEventListener("Click", function(){
    if (email.value == "" || senha.value == ""){
        alert("Campo e-mail ou senha não preenchido corretamente \n Coloque novamente e-mail e login");
    } else {
        ("Campos preenchido com sucesso");
    }
});