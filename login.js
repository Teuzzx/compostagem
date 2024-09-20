function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Login feito com sucesso');
        location.href = "hometeste.html";
    }else
    if(login == "visitante@eventos.org" && senha == "demopass2"){
        alert('Sucesso');
        location.href = "hometeste.html";
    }else{
        alert('E-mail e/ou senha incorreto(s)');
    }

}