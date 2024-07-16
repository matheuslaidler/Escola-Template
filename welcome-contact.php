<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $destinatario = "site@crcirandinha.com.br";
    $assunto = "Formulário de Contato - 1";

    $nomeResponsavel = filter_input(INPUT_POST, 'responsavel', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $nomeAluno = filter_input(INPUT_POST, 'aluno', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $telefone = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

    if ($email && !empty($nomeResponsavel) && !empty($nomeAluno) && !empty($telefone)) {
        $body = "===================================\n";
        $body .= "FALE CONOSCO - Cirandinha | Form 1\n";
        $body .= "===================================\n\n";
        $body .= "Nome: $nomeResponsavel\n";
        $body .= "Aluno: $nomeAluno\n";
        $body .= "Telefone: $telefone\n";
        $body .= "Email: $email\n\n";
        $body .= "===================================\n";

        $headers = "From: $destinatario\r\n";
        $headers .= "Reply-To: $email\r\n";
        if (mail($destinatario, $assunto, $body, $headers)) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Erro ao enviar o e-mail']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Dados inválidos']);
    }
    exit;
}
?>
