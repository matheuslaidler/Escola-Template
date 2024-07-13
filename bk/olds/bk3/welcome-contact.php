<?php
// teste - formulário 1
$destinatario = "site@crcirandinha.com.br";
$assunto = "Formulário de Contato - 1";
$nomeResponsavel = $_POST["contact-form-parentname"];
$nomeAluno = $_POST["contact-form-studentname"];
$telefone = $_POST["contact-form-tell"];
$mail = $_POST["contact-form-mail"];

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - Cirandinha | Form 1" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nomeResponsavel . "\n";
$body = $body . "Aluno: " . $nomeAluno . "\n";
$body = $body . "Telefone: " . $telefone . "\n";
$body = $body . "Email: " . $mail . "\n\n";
$body = $body . "===================================" . "\n";


// envia o email
mail($destinatario, $assunto , $body, "From: $mail\r\n");

// redireciona para a página de obrigado
header("location:thanks.html");



////////////////////////
// email_form.php

//if ($_SERVER["REQUEST_METHOD"] === "POST") {
 //   $nomeResponsavel = $_POST["nome_do_responsavel"];
 //   $nomeAluno = $_POST["nome_do_aluno"];
 //   $telefone = $_POST["telefone"];
    // Faça o que desejar com os dados (por exemplo, salvar em um banco de dados)
    // ...
//}

//$destinatario = "site@crcirandinha.com.br";

//$nome = $_REQUEST['nome'];
//$email = $_REQUEST['email'];
//$mensagem = $_REQUEST['mensagem'];
//$assunto = $_REQUEST['assunto'];

 // monta o e-mail na variavel $body

//$body = "===================================" . "\n";
//$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
//$body = $body . "===================================" . "\n\n";
//$body = $body . "Nome: " . $nome . "\n";
//$body = $body . "Email: " . $email . "\n";
//$body = $body . "Mensagem: " . $mensagem . "\n\n";
//$body = $body . "===================================" . "\n";

// envia o email
//mail($destinatario, $assunto , $body, "From: $email\r\n");

// redireciona para a página de obrigado
//header("location:obrigado.htm");


?>