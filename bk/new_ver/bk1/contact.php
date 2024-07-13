<?php
// teste - formulario 2
$destinatario = "site@crcirandinha.com.br";
$assunto = "Formulário de Contato - 2";
$nomeResponsavel = $_POST["contact-form-name"];
$nomeAluno = $_POST["contact-form-student"];
$turn = $_POST["contact-form-turn"];
$date = $_POST["contact-form-date"];
$year = $_POST["contact-form-year"];
$class = $_POST["contact-form-class"];
$telefone = $_POST["contact-form-zapp"];
$mail = $_POST["contact-form-email"];
$other = $_POST["contact-form-message"]

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - Cirandinha | Form 2" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nomeResponsavel . "\n";
$body = $body . "Aluno: " . $nomeAluno . "\n";
$body = $body . "Telefone: " . $telefone . "\n";
$body = $body . "Email: " . $mail . "\n\n";
$body = $body . "Série: " . $class . "\n\n";
$body = $body . "Turno: " . $turn . "\n\n";
$body = $body . "Ano Pretendido: " . $year . "\n\n";
$body = $body . "Data de Nascimento: " . $mail . "\n\n";
$body = $body . "Recado do responsável: " \n . $other . "\n\n";
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