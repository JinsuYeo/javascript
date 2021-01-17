'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


const showModalFn = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModalFn = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const closeModalByKey = function(e){
    console.log(e.key)
    if(e.key === "Escape" && !modal.classList.contains('hidden'))
          closeModalFn();
};





for(let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', showModalFn);
}

closeModal.addEventListener('click', closeModalFn);
overlay.addEventListener('click', closeModalFn);
document.addEventListener('keydown', closeModalByKey);