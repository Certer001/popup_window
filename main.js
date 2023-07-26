const closeBtnNode = document.querySelector('#js-close-btn');
const modalNode = document.querySelector('.modal-window');
const openModalNode = document.querySelector('.js-open-modal');
const modalBody = document.querySelector('.modal-body');

openModalNode.addEventListener('click', function() {
    modalBody.classList.add('element-active');
    modalNode.classList.add('element-active');
    modalNode.style.display = 'block';
});

closeBtnNode.addEventListener('click', function() {
    modalNode.style.display='none';
});

window.addEventListener('click', function(event) {
    if(event.target === modalNode) {
        modalNode.style.display ='none';
    }
})