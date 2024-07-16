<?php
$to = "matheuslaidler@gmail.com";
$subject = "Teste de Envio de E-mail";
$message = "Se você recebeu este e-mail, o envio de e-mails está funcionando.";
$headers = array(
    'From' => 'site@crcirandinha.com.br',
    'Reply-To' => 'site@crcirandinha.com.br',
    'X-Mailer' => 'PHP/' . phpversion()
);
if (mail($to, $subject, $message, $headers)) {
    echo "E-mail enviado com sucesso!!";
} else {
    echo "Erro ao enviar o e-mail...";
}
?>

