<?php
$to = "matheuslaidler@gmail.com";
$subject = "Teste de Envio de E-mail";
$message = "Se você recebeu este e-mail, o envio de e-mails está funcionando.";

if (mail($to, $subject, $message)) {
    echo "E-mail enviado com sucesso.";
} else {
    echo "Erro ao enviar o e-mail.";
}
?>
