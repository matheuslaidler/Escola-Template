<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $destinatario = "site@crcirandinha.com.br";
    $assunto = "Formulário de Contato Completo";

    $nomeResponsavel = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'mail', FILTER_VALIDATE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'zapp', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $nomeAluno = filter_input(INPUT_POST, 'nomeAluno', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $ano = filter_input(INPUT_POST, 'ano', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $serie = filter_input(INPUT_POST, 'serie', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $turno = filter_input(INPUT_POST, 'turno', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $dataNascimento = filter_input(INPUT_POST, 'data', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    if ($email && !empty($nomeResponsavel) && !empty($telefone) && !empty($nomeAluno)) {
        $body = "==================================\n";
        $body .= "FALE CONOSCO - Formulário Completo\n";
        $body .= "==================================\n\n";
        $body .= "Nome do responsável: $nomeResponsavel\n";
        $body .= "Telefone de contato: $telefone\n";
        $body .= "Email de contato: $email\n\n";
        $body .= "Nome do aluno: $nomeAluno\n";
        $body .= "Nascido em: $dataNascimento\n\n";
        $body .= "Série atual: $serie\n\n";
        $body .= "Ano pretendido: $ano\n\n";
        $body .= "Turno: $turno\n\n";
        $body .= "==================================\n";

        $headers = "From: $destinatario\r\n";
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
