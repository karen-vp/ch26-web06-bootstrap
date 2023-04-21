console.log('Hola desde un script externo');

const changeColorToRed = (color)=>{
    const paragraph = document.body.querySelector('#name');
    paragraph.style.color= color;
}