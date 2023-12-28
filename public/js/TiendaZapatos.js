var container = document.getElementById('container2')
var container2 = document.getElementById('container3')
var container3 = document.getElementById('container4')
var container4 = document.getElementById('container5')

const item  = document.getElementsByClassName('item2')

container.addEventListener('click', (e) => {
    var clickedItem = e.target.closest('.item2');
    if(clickedItem){
        clickedItem.classList.toggle('clicked');
        clickedItem.parentElement.classList.toggle('scale')
        clickedItem.children[1].classList.toggle('rotate')
    }
})

container2.addEventListener('click', (e) => {
    var clickedItem = e.target.closest('.item2');
    if(clickedItem){
        clickedItem.classList.toggle('clicked');
        clickedItem.parentElement.classList.toggle('scale')
        clickedItem.children[1].classList.toggle('rotate')
    }
})

container3.addEventListener('click', (e) => {
    var clickedItem = e.target.closest('.item2');
    if(clickedItem){
        clickedItem.classList.toggle('clicked');
        clickedItem.parentElement.classList.toggle('scale')
        clickedItem.children[1].classList.toggle('rotate')
    }
})

container4.addEventListener('click', (e) => {
    var clickedItem = e.target.closest('.item2');
    if(clickedItem){
        clickedItem.classList.toggle('clicked');
        clickedItem.parentElement.classList.toggle('scale')
        clickedItem.children[1].classList.toggle('rotate')
    }
})