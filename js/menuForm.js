function sendForm(formId, thanksMenuId, phpUrl) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      fetch(phpUrl, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.getElementById(thanksMenuId).style.display = 'flex';
          setTimeout(() => {
            document.getElementById(thanksMenuId).style.display = 'none';
          }, 3000);/*aumentar o delay que o menu fica aberto em ms -> 3000 = 3s*/
        } else {
          alert('Erro ao enviar o formulário. Por favor, tente novamente.');
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o formulário. Por favor, tente novamente.');
      });
    });
  }

  sendForm('welcome-contact', 'thanksMenu1', 'welcome-contact.php');
  sendForm('contact', 'thanksMenu2', 'contact.php');