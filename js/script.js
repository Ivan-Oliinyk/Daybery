"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const hederNavItems = document.querySelectorAll('.header__nav .item');

    hederNavItems[hederNavItems.length - 1].style.borderRight = 0; //Убераем крайний правый border в последнем item nav

    //функция для открытия закрытия модельных окон блока Услуги
    function runModalWindows() {
        const modalContents = document.querySelectorAll('.modal_wrapper'),
              closeModal = document.querySelectorAll('.modal__content .close'),
              btnServise = document.querySelectorAll('.btn_servise'),
              parentContent = document.querySelector('.servises__content');

        function hideModal() {
            modalContents.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            document.body.style.overflow = 'auto';
        }

        hideModal();

        function showModal(i) {
            modalContents[i].classList.add('show', 'fade');
            modalContents[i].classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }

        btnServise.forEach((item, i) => {
            item.addEventListener('click', () => {
                hideModal();
                showModal(i);
            });
        })

        closeModal.forEach(item => {
            item.addEventListener('click', hideModal);
        });

        //закрываем модельное окно при клике esc
        document.addEventListener('keydown', (e) => {
            modalContents.forEach(modal => {
                if (e.code === "Escape" && modal.classList.contains('show')) {
                    hideModal();
                }
            });
        });

        //закрываем модельное окно при клике на подложку
        modalContents.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    hideModal();
                }
            });
        });
    }
    
    runModalWindows();

    //функция сдайдера
    function runSlider() {
        const slides = document.querySelectorAll('.offer__slide'),
              prev = document.querySelector('.offer__slider-prev'),
              next = document.querySelector('.offer__slider-next'),
              slidesWrapper = document.querySelector('.offer__slider-wrapper'),
              slidesField = document.querySelector('.offer__slider-inner'),
            //   width = window.getComputedStyle(slides[0]).width;
              width = window.getComputedStyle(slidesWrapper).width;
        
        let offset = 0;
    
        slidesField.style.width = 33 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
    
        slidesWrapper.style.overflow = 'hidden';
    
        slides.forEach(slide => {
            slide.style.width = width;
        });
    
        next.addEventListener('click', () => {
            
            if (offset == +width.slice(0, width.length -2) * (slides.length - 1)) {
                offset = +width.slice(0, width.length -2) * (slides.length - 1);
            } else {
                offset += +width.slice(0, width.length - 2);
            }
    
            slidesField.style.transform =`translateX(-${offset/3}px)`;
        });
    
        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = 0;
            } else {
                offset -= +width.slice(0, width.length - 2);
            }
    
            slidesField.style.transform =`translateX(-${offset/3}px)`;
        });
    }

    runSlider();

});