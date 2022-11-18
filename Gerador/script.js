
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = docuent.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#" 

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.onInput = function (){
    
sizePassword.innerHTML=this.value;


}