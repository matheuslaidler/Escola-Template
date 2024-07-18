 //abrir menu
 //form1
document.getElementById('welcome-contact').addEventListener('submit', function(event) {
    event.preventDefault();
    //  envio do formulário com PHP - desativqdo
    // aq fazer uma chamada AJAX p enviar o form sem recarregar a página
    document.getElementById('thanksMenu1').style.display = 'flex';

    // Fechando automaticamente o menu após 3 segundos
    setTimeout(function() {
      document.getElementById('thanksMenu1').style.display = 'none';
    }, 3000);
  
  });


  //form2
  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    // envio do formulário com PHP - desativqdo
    // aq fazer uma chamada AJAX p enviar o form sem recarregar a página
    document.getElementById('thanksMenu2').style.display = 'flex';

    // Fechando o menu automaticamente 3s
    setTimeout(function() {
      document.getElementById('thanksMenu2').style.display = 'none';
    }, 3000);
  
  });