// Todos os .JS em um para o site

// Creditos: Matheus Laidler

//////////////
// gallery.js
//meu script atual feito para a nova galeria

 /*my new slide script to cirandinha/clicar e criar - Matheus Laidler*/


 const carousels = document.querySelectorAll('.carousel-container');
 carousels.forEach(carousel => {
     const carouselSlide = carousel.querySelector('.carousel-slide');
     const items = carousel.querySelectorAll('.carousel-image, .carousel-video');
     const prevBtn = carousel.querySelector('.prev');
     const nextBtn = carousel.querySelector('.next');
     const dots = carousel.nextElementSibling.querySelectorAll('.dot');

     let counter = 0;
     let isDragging = false;
     let startPos = 0;
     let currentTranslate = 0;
     let prevTranslate = 0;
     let animationID;

     function updateDots() {
         dots.forEach(dot => dot.classList.remove('active'));
         dots[counter].classList.add('active');
     }

     function moveToSlide(index) {
         carouselSlide.style.transform = 'translateX(' + (-index * 100) + '%)';
         counter = index;
         updateDots();
     }

     nextBtn.addEventListener('click', () => {
         counter = (counter + 1) % items.length;
         moveToSlide(counter);
     });

     prevBtn.addEventListener('click', () => {
         counter = (counter - 1 + items.length) % items.length;
         moveToSlide(counter);
     });

     dots.forEach((dot, index) => {
         dot.addEventListener('click', () => {
             moveToSlide(index);
         });
     });

     function touchStart(index) {
         return function(event) {
             isDragging = true;
             startPos = getPositionX(event);
             animationID = requestAnimationFrame(animation);
             carouselSlide.classList.add('grabbing');
         }
     }

     function touchMove(event) {
         if (isDragging) {
             const currentPosition = getPositionX(event);
             currentTranslate = prevTranslate + currentPosition - startPos;
         }
     }

     function touchEnd() {
         isDragging = false;
         cancelAnimationFrame(animationID);
         const movedBy = currentTranslate - prevTranslate;

         if (movedBy < -100 && counter < items.length - 1) {
             counter++;
         }
         if (movedBy > 100 && counter > 0) {
             counter--;
         }

         setPositionByIndex();
         carouselSlide.classList.remove('grabbing');
     }

     function getPositionX(event) {
         return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
     }

     function animation() {
         setSliderPosition();
         if (isDragging) requestAnimationFrame(animation);
     }

     function setSliderPosition() {
         carouselSlide.style.transform = `translateX(${currentTranslate}px)`;
     }

     function setPositionByIndex() {
         currentTranslate = counter * -carouselSlide.clientWidth;
         prevTranslate = currentTranslate;
         setSliderPosition();
         updateDots();
     }

     items.forEach((item, index) => {
         const itemElement = item;
         itemElement.addEventListener('dragstart', (e) => e.preventDefault());

         itemElement.addEventListener('touchstart', touchStart(index));
         itemElement.addEventListener('touchmove', touchMove);
         itemElement.addEventListener('touchend', touchEnd);

         itemElement.addEventListener('mousedown', touchStart(index));
         itemElement.addEventListener('mousemove', touchMove);
         itemElement.addEventListener('mouseup', touchEnd);
         itemElement.addEventListener('mouseleave', () => {
             if (isDragging) {
                 touchEnd();
             }
         });
     });

     window.addEventListener('resize', setPositionByIndex);
 });



 ////////////

///////////////
 // menuForm.js

 // codigo para funcionalidade da abertura do menu pós preenchimento do formulário
 // informações para o PHP com ajax sem precisar recarregar a página
 // erro caso falhe
 // menu caso dê certo

// function sendForm(formId, thanksMenuId, phpUrl) {
//    const form = document.getElementById(formId);
//    form.addEventListener('submit', function(event) {
//      event.preventDefault();
//
//      const formData = new FormData(form);
//      fetch(phpUrl, {
//        method: 'POST',
//        body: formData
//      })
//      .then(response => response.json())
//      .then(data => {
//        if (data.success) {
//          document.getElementById(thanksMenuId).style.display = 'flex';
//          setTimeout(() => {
//            document.getElementById(thanksMenuId).style.display = 'none';
//          }, 3000);/*aumentar o delay que o menu fica aberto em ms -> 3000 = 3s*/
//        } else {
//          alert('Erro ao enviar o formulário. Por favor, tente novamente.');
//        }
//      })
//      .catch(error => {
//        console.error('Erro:', error);
//        alert('Erro ao enviar o formulário. Por favor, tente novamente.');
//      });
//    });
//  }
//
//  sendForm('welcome-contact', 'thanksMenu1', 'welcome-contact.php');
//  sendForm('contact', 'thanksMenu2', 'contact.php');

  // script para abrir o menu de envio do formulário, e formulário com ajax para PHP
    // php feito com tentativa de proteção contra injections

    //document.addEventListener('DOMContentLoaded', function() {
    //    function sendForm(formId, thanksMenuId, phpUrl) {
    //        const form = document.getElementById(formId);
    //        form.addEventListener('submit', function(event) {
    //            event.preventDefault(); // Prevenir comportamento padrão
    //            console.log(`Formulário ${formId} enviado`);
    //
    //            const formData = new FormData(form);
    //            fetch(phpUrl, {
    //                method: 'POST',
    //                body: formData
    //           })
    //           .then(response => {
    //                console.log('Resposta recebida:', response);
    //                return response.json();
    //            })
    //            .then(data => {
    //                console.log('Dados recebidos:', data);
    //                if (data.success) {
    //                    document.getElementById(thanksMenuId).style.display = 'flex';
    //                    setTimeout(() => {
    //                        document.getElementById(thanksMenuId).style.display = 'none';
    //                    }, 3000); // Menu de agradecimento por 3 segundos
    //                } else {
    //                    alert('Erro ao enviar o formulário: ' + data.message);
    //                }
    //            })
    //            .catch(error => {
    //                console.error('Erro:', error);
    //                alert('Erro ao enviar o formulário. Por favor, tente novamente.');
    //            });
    //        });
    //    }
    //
    //    sendForm('welcome-contact', 'thanksMenu1', 'welcome-contact.php');
    //    sendForm('contact', 'thanksMenu2', 'contact.php');
    //});


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
    
        sendForm('welcome-contact', 'thanksMenu1', 'welcome-contact.php');
        sendForm('contact', 'thanksMenu2', 'contact.php');
    });
    
    

//////////////