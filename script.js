//

function toggleMenu(){
    const menu = document.querySelector(".menu-links"); //targeting the '.menu-links' class/element
    const icon = document.querySelector(".ham-icon");

    //whenever you click these elements they are going to either add/remove the open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.querySelector(".section_text_p2").textContent = "";

//typewriter effect for the profile section
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


// Select the modal and modal elements
const modal = document.getElementById("bio-modal");
const profilePic = document.querySelector(".about-pic");
const closeBtn = document.querySelector(".close-btn");

// Open modal when image is clicked
profilePic.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// hidden easter egg
console.log("You're peeking under the hood! Welcome, fellow code explorer 🛠️");
