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