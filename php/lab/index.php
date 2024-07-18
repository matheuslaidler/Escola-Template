<?php
echo "Testando envio de e-mail no backend";
$to = "SeuEMAIL@gmail.com";/*seu email pessoal para teste*/
$subject = "Teste de Envio de E-mail";
$message = "Se você recebeu este e-mail, o envio de e-mails está funcionando.";
$headers = array(
    'From' => 'EMAIL@DOMINIO.com.br',/*seu email da empresa / do seu dominio | quem envia - mesmo do .user.ini (!)(!)*/
    'Reply-To' => 'EMAIL@DOMINIO.com.br',/*seu email da empresa / do seu dominio | quem recebe*/
    'X-Mailer' => 'PHP/' . phpversion() /*versao do php;; lembrando que quem envia pode tbm receber de si msm*/
);
if (mail($to, $subject, $message, $headers)) {/*ver a resposta pelo inspecionar elemento - redes - teste.php - achar o visualizador da resporta etc*/
    echo "E-mail enviado com sucesso!!"; 
} else {
    echo "Puts... deu erro no envio desse e-mail.";
}
?>

