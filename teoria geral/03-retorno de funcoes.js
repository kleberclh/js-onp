function garcom(prato, mesa) {
  return `${prato} entregue na mesa ${mesa}`;
}

const retornoGarcom = garcom("carbonara", 10);

console.log(retornoGarcom);

//----------------------------------------------//

const email_correto = "kleber@dev.com";
const senha_correta = "1234";

function login(email, senha) {
  //verificar se e-mail e senha estão corretos
  if (email === email_correto && senha === senha_correta) {
    return "Login realizado";
  } else {
    return "Verifique suas credenciais";
  }
}

const retornoLogin = login("kleber@dev.com", "1234");

console.log(retornoLogin);
