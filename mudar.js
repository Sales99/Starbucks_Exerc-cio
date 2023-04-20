// troca a imagem do sorvete grande (fazer essa função segundo)
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
// ela troca a cor do circulo (fazer essa função terceiro)
function changeCircleColor(color){
    const circulo =document.querySelector('.circulo')
    circulo.style.background = color;
}
// fazer essa função primeiro ( ela altera o estado ativo/desativo)
function toggleMenu () {
    var menuToggle = document.querySelector('.toggle'); //cria uma variavel
    var links = document.querySelector('.links'); //cria uma variavel e usa
    menuToogle.classList.toggle('active') //troca o estado da classe
    links.classList.toogle('active') //troca o estado da classe
}