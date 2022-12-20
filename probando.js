const carrito= document.querySelector(".navbar-shopping-cart");
carrito.addEventListener("click",apareceydesaparecelista);
const carritomenu= document.querySelector(".product-detail");
function apareceydesaparecelista(){
    carritomenu.classList.toggle("inactive");
    menuAparecido.classList.add("inactive");
    menu2.classList.add("inactive");
    console.log("click");

}
const logo= document.querySelector(".menu");
const menu2= document.querySelector(".mobile-menu");
logo.addEventListener("click",apareceydesaparece2);


function apareceydesaparece2(){
    menu2.classList.toggle("inactive");
    carritomenu.classList.add("inactive");
}
const menu= document.querySelector(".navbar-email");
menu.addEventListener("click",apareceydesaparece);
const menuAparecido = document.querySelector(".desktop-menu");
function apareceydesaparece(){
    menuAparecido.classList.toggle("inactive");
    carritomenu.classList.add("inactive");
};
/*¿Qué es classList Toggle?
classList. toggle("class") – agrega la clase si no existe, si no la remueve*/
