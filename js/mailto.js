 /*mails to -- ativados*/

  //mailto-1.js

  // Obtém referências para os elementos do formulário
const contactform = document.getElementById('welcome-contact');
const parentnameInput = document.getElementById('responsavel');
const studentnameInput = document.getElementById('aluno');
const tellInput = document.getElementById('tel');
const mailInput = document.getElementById('email');

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


    //mailto-2.js

    // Obtém referências para os elementos do formulário
const form = document.getElementById('contact');
const nameInput = document.getElementById('nome');
const studentInput = document.getElementById('nomeAluno');
const dateInput = document.getElementById('data');
const yearInput = document.getElementById('ano');
const classInput = document.getElementById('serie');
const turnInput = document.getElementById('turno');
const emailInput = document.getElementById('mail');
const zappInput = document.getElementById('zapp');
const messageInput = document.getElementById('extra');

// Função para enviar o formulário
function submitForm(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Coleta os valores dos campos
  const name = nameInput.value;
  const student = studentInput.value;
  const date = dateInput.value;
  const year = yearInput.value;
  const classInfo = classInput.value;
  const turn = turnInput.value;
  const email = emailInput.value;
  const zapp = zappInput.value;
  const message = messageInput.value;

  // Aqui você pode add lógica para validar os campos, se necessário

  // Crie a URL de e-mail com os valores dos campos
  const mailtoLink = `mailto:site@crcirandinha.com.br?subject=Formulário de Contado&body=Segue todas os dados do formulário de contato para matrícula ou afins.%0D%0A%0D%0A.Nome do Responsável - ${name}%0D%0A.Nome do(a) Filho(a) - ${student}%0D%0A.Data de Nascimento do(a) Filho(a) - ${date}%0D%0A.Ano Pretendido - ${year}%0D%0A.Turma/Série Atual - ${classInfo}%0D%0A.Turno - ${turn}%0D%0A.Email do responsável - ${email}%0D%0A.Telefone de Contato / Whatsapp - ${zapp}%0D%0A.Mensagem do Responsável %0D%0A ${message} %0D%0A%0D%0A Atenciosamente,%0D%0A${name}.`;

  // Abre o cliente de e-mail padrão com a URL de e-mail
  window.location.href = mailtoLink;
}

// Add um ouvinte de evento p/ o envio do formulário
form.addEventListener('submit', submitForm);

