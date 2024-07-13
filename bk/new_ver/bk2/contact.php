<?php

// Código parta envio de formulário atualizado - PHP - Matheus Laidler.
//Essas versões incluem a verificação do método POST e a sanitização dos dados.
//Tentar ter certeza de que os dados partiram de um formulário e tentar evitar injeções.

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $destinatario = "site@crcirandinha.com.br";
    $assunto = "Formulário de Contato - 2";
    $nomeResponsavel = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_STRING);
    $mail = filter_input(INPUT_POST, "mail", FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, "zapp", FILTER_SANITIZE_STRING);
    $nomeAluno = filter_input(INPUT_POST, "nomeAluno", FILTER_SANITIZE_STRING);
    $year = filter_input(INPUT_POST, "ano", FILTER_SANITIZE_STRING);
    $class = filter_input(INPUT_POST, "serie", FILTER_SANITIZE_STRING);
    $turn = filter_input(INPUT_POST, "turno", FILTER_SANITIZE_STRING);
    $date = filter_input(INPUT_POST, "data", FILTER_SANITIZE_STRING);

    $body = "===================================" . "\n";
    $body .= "FALE CONOSCO - Cirandinha | Form 2" . "\n";
    $body .= "===================================" . "\n\n";
    $body .= "Nome do Responsável: " . $nomeResponsavel . "\n";
    $body .= "Telefone de contato: " . $telefone . "\n";
    $body .= "Email de contato: " . $mail . "\n\n";
    $body .= "Nome do Aluno: " . $nomeAluno . "\n";
    $body .= "Nascido em: " . $date . "\n\n";
    $body .= "Série Atual: " . $class . "\n\n";
    $body .= "Ano Pretendido: " . $year . "\n\n";
    $body .= "Turno: " . $turn . "\n\n";
    $body .= "===================================" . "\n";

    // Envia o email
    mail($destinatario, $assunto, $body, "From: $mail\r\n");

    // Redireciona para a página de obrigado
    header("Location: thanks.html");
    exit;
}




// formulário antigo - backup - sem sanitização e sem verificação de método - menos seguro;
// formulario 2
//$destinatario = "site@crcirandinha.com.br";
//$assunto = "Formulário de Contato - 2";
//$nomeResponsavel = $_POST["nome"];
//$mail = $_POST["mail"];
//$telefone = $_POST["zapp"];
//$nomeAluno = $_POST["nomeAluno"];
//$year = $_POST["ano"];
//$class = $_POST["serie"];
//$turn = $_POST["turno"];
//$date = $_POST["data"];
//$other = $_POST["extra"]

//$body = "===================================" . "\n";
//$body = $body . "FALE CONOSCO - Cirandinha | Form 2" . "\n";
//$body = $body . "===================================" . "\n\n";
//$body = $body . "Nome do Responsável: " . $nomeResponsavel . "\n";
//$body = $body . "Telefone de contato: " . $telefone . "\n";
//$body = $body . "Email de contato: " . $mail . "\n\n";
//$body = $body . "Nome do Aluno: " . $nomeAluno . "\n";
//$body = $body . "Nascido em: " . $date . "\n\n";
//$body = $body . "Série Atual: " . $class . "\n\n";
//$body = $body . "Ano Pretendido: " . $year . "\n\n";
//$body = $body . "Turno: " . $turn . "\n\n";
//$body = $body . "Recado do responsável: " \n . $other . "\n\n";
//$body = $body . "===================================" . "\n";


// envia o email
//mail($destinatario, $assunto , $body, "From: $mail\r\n");

// redireciona para a página de obrigado
//header("location:thanks.html");



////////////////////////
// estrutura mais correta é usar a condicional para ter a certeza de que os dados estão partindo de um formulário

//if ($_SERVER["REQUEST_METHOD"] === "POST") {
//    $destinatario = "site@crcirandinha.com.br";
//    $nome = $_POST["nome"];
//    $email = $_POST["email"];
//    $mensagem = $_POST["mensagem"];
//    $assunto = $_POST["assunto"];

    // Monta o e-mail na variável $body
//    $body = "===================================" . "\n";
//    $body .= "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
//    $body .= "===================================" . "\n\n";
//    $body .= "Nome: " . $nome . "\n";
//    $body .= "Email: " . $email . "\n";
//    $body .= "Mensagem: " . $mensagem . "\n\n";
//    $body .= "===================================" . "\n";

    // Envia o e-mail
//    mail($destinatario, $assunto, $body, "From: $email\r\n");

    // Redireciona para a página de obrigado
//    header("Location: obrigado.htm");
//    exit;
//}

// ainda é legal fzr a sanitização do codigo
////////////////////////
?>