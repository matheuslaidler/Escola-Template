// Obtém referências para os elementos do formulário
const contactform = document.querySelector('.home-form-form');
const parentnameInput = document.getElementById('contact-form-parentname');
const studentnameInput = document.getElementById('contact-form-studentname');
const tellInput = document.getElementById('contact-form-tell');
const mailInput = document.getElementById('contact-form-mail');

// Função para enviar o formulário
function formsubmit(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Coleta os valores dos campos
  const parentname = parentnameInput.value;
  const studentname = studentnameInput.value;
  const tell = tellInput.value;
  const mail = mailInput.value;

  // Aqui você pode add lógica para validar os campos, se necessário

  // Crie a URL de e-mail com os valores dos campos
  const mailtoLink = `mailto:site@crcirandinha.com.br?subject=Contato&body=Formulário de Contato Inicial%0D%0ASegue os dados preenchidos no formulário %0D%0A%0D%0A.Nome do Responsável - ${parentname}%0D%0A.Aluno - ${studentname}%0D%0A.Telefone/Whatsapp - ${tell}%0D%0A.Email - ${mail}%0D%0A%0D%0A Atenciosamente,%0D%0A${parentname}.`;

  // Abre o cliente de e-mail padrão com a URL de e-mail
  window.location.href = mailtoLink;
}

// Adiciona um ouvinte de evento para o envio do formulário
contactform.addEventListener('submit', formsubmit);