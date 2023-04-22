// Creacion de la instancia de la clase Router()

const ROUTER = new Router(PATHS);

const changeColorToRed = (color)=>{
    const paragraph = document.body.querySelector('#name');
    paragraph.style.color= color;
}

function changeColorParagraph(element, color){
    console.log(element);
    element.style.color = color;
}

function resetColor(){
    const paragraphs = document.getElementsByClassName('text-color');
    console.log(paragraphs);
    for(let i=0; i<paragraphs.length; i++){
        const element = paragraphs[i];
        element.style.color = 'black';
    }
}