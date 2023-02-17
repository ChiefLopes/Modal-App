// Variables

const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');


//! Event Listeners

// Event Listener to 
openBtn.addEventListener('click', () =>{

    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    
    modalContainer.style.display = 'none'
})

window.addEventListener ('click', ()=> {
   
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none'
    }
})


