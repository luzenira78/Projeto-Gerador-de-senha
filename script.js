let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#_';
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; //Dá funcionalidade ap slider;

//Dá funcionalidade ao slider;
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//Função para fazer o botão gerador funcionar;
// colocar onlick="generationPassword()" la no button (HTML);
function generationPassword() {
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));  
    }
    //Removendo a classe hide;
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}
//Função para copiar a senha; vkmaX_2B4#17tkR
//Colocar onclick="copyPassword()" la na div  (HTML);
function copyPassword() {
    alert('Senha foi copia com sucesso!'); //Não copia se tiver o alert;
    navigator.clipboard.writeText(novaSenha);
}







