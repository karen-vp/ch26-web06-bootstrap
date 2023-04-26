
const changeColorToRed = (color)=>{
    const paragraph = document.body.querySelector('#name');
    paragraph.style.color= color;
}

function changeColorParagraph(element, color){
    element.style.color = color;
}

function resetColor(){
    const paragraphs = document.getElementsByClassName('text-color');
    for(let i=0; i<paragraphs.length; i++){
        const element = paragraphs[i];
        element.style.color = 'black';
    }
}

function changeName(){
    const tituloNombre = document.getElementById('nombre');
    const nuevoNombre = prompt('Escribe tu nombre'); 
    tituloNombre.innerHTML = `Hola ${nuevoNombre}`; 
}