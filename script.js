//

function toggleMenu(){
    const menu = document.querySelector(".menu-links"); //targeting the '.menu-links' class/element
    const icon = document.querySelector(".ham-icon");

    //whenever you click these elements they are going to either add/remove the open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}