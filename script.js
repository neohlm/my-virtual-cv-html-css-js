//

function toggleMenu(){
    const menu = document.querySelector(".menu-links"); //targeting the '.menu-links' class/element
    const icon = document.querySelector(".ham-icon");

    //whenever you click these elements they are going to either add/remove the open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.querySelector(".section_text_p2").textContent = "";

//typewriter effect
let i = 0;
const txt = 'Final Year Student - Aspiring Software Engineer - Cyber Security Enthusiast';
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".section_text_p2").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;