<?php
$to = "matheuslaidler@gmail.com";
$subject = "Teste de Envio de E-mail";
$message = "Se você recebeu este e-mail, o envio de e-mails está funcionando.";
$headers = "From: site@crcirandinha.com.br\r\n";
$headers .= "Reply-To: site@crcirandinha.com.br\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "E-mail enviado com sucesso.";
} else {
    echo "Erro ao enviar o e-mail.";
}
?>
