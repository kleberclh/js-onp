const email_correto = "kleber@dev.com"
const senha_correta = "1234"


function login(email, senha){
    //verificar se e-mail e senha estão corretos
    if(email === email_correto && senha === senha_correta){
        console.log("Login realizado")
    }else{
        console.log("Verifique sua credenciais")
    }
}

login("kleber@dev.com", "123")