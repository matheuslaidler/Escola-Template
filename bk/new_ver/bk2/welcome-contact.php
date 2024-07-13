<?php

// Código parta envio de formulário atualizado - PHP - Matheus Laidler.
//Essas versões incluem a verificação do método POST e a sanitização dos dados.
//Tentar ter certeza de que os dados partiram de um formulário e tentar evitar injeções.

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $destinatario = "site@crcirandinha.com.br";
    $assunto = "Formulário de Contato - 1";
    $nomeResponsavel = filter_input(INPUT_POST, "responsavel", FILTER_SANITIZE_STRING);
    $nomeAluno = filter_input(INPUT_POST, "aluno", FILTER_SANITIZE_STRING);
    $telefone = filter_input(INPUT_POST, "tel", FILTER_SANITIZE_STRING);
    $mail = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

    $body = "===================================" . "\n";
    $body .= "FALE CONOSCO - Cirandinha | Form 1" . "\n";
    $body .= "===================================" . "\n\n";
    $body .= "Nome: " . $nomeResponsavel . "\n";
    $body .= "Aluno: " . $nomeAluno . "\n";
    $body .= "Telefone: " . $telefone . "\n";
    $body .= "Email: " . $mail . "\n\n";
    $body .= "===================================" . "\n";

    // Envia o email
    mail($destinatario, $assunto, $body, "From: $mail\r\n");

    // Redireciona para a página de obrigado
    header("Location: thanks.html");
    exit;
}



// formulário antigo - backup - sem sanitização e sem verificação de método - menos seguro;
// formulário 1
//$destinatario = "site@crcirandinha.com.br";
//$assunto = "Formulário de Contato - 1";
//$nomeResponsavel = $_POST["responsavel"];
//$nomeAluno = $_POST["aluno"];
//$telefone = $_POST["tel"];
//$mail = $_POST["email"];

//$body = "===================================" . "\n";
//$body = $body . "FALE CONOSCO - Cirandinha | Form 1" . "\n";
//$body = $body . "===================================" . "\n\n";
//$body = $body . "Nome: " . $nomeResponsavel . "\n";
//$body = $body . "Aluno: " . $nomeAluno . "\n";
//$body = $body . "Telefone: " . $telefone . "\n";
//$body = $body . "Email: " . $mail . "\n\n";
//$body = $body . "===================================" . "\n";


// envia o email
//mail($destinatario, $assunto , $body, "From: $mail\r\n");

// redireciona para a página de obrigado
//header("location:thanks.html");

?>