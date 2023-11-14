var container = document.getElementById('container2')
var container2 = document.getElementById('container3')
var container3 = document.getElementById('container4')

const item  = document.getElementsByClassName('item2')

ingresar(container, container2, container3)

function ingresar(container, container2, container3){
    container.addEventListener('click', (e) => {
        if(e.target.classList.contains('item')){
            e.target.parentElement.classList.toggle('scale')
            e.target.children[1].classList.toggle('rotate')
        }
    })
    container2.addEventListener('click', (e) => {
        if(e.target.classList.contains('item')){
            e.target.parentElement.classList.toggle('scale')
            e.target.children[1].classList.toggle('rotate')
        }
    })
    container3.addEventListener('click', (e) => {
        if(e.target.classList.contains('item')){
            e.target.parentElement.classList.toggle('scale')
            e.target.children[1].classList.toggle('rotate')
        }
    })
}