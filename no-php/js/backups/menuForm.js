document.addEventListener('DOMContentLoaded', function() {
    function sendForm(formId, thanksMenuId, phpUrl) {
        const form = document.getElementById(formId);
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir comportamento padrão
            console.log(`Formulário ${formId} enviado`);

            const formData = new FormData(form);
            fetch(phpUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                console.log('Resposta recebida:', response);
                return response.json();
            })
            .then(data => {
                console.log('Dados recebidos:', data);
                if (data.success) {
                    document.getElementById(thanksMenuId).style.display = 'flex';
                    setTimeout(() => {
                        document.getElementById(thanksMenuId).style.display = 'none';
                    }, 3000); // Menu de agradecimento por 3 segundos
                } else {
                    alert('Erro ao enviar o formulário: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao enviar o formulário. Por favor, tente novamente.');
            });
        });
    }

    sendForm('welcome-contact', 'thanksMenu1', 'php/welcome-contact.php');
    sendForm('contact', 'thanksMenu2', 'php/contact.php');
});