//function to animate hamburger icon
const menuBar = document.getElementById("menuBar");
const dropdown = document.querySelector(".blank-canvas");
const linkWrapper = document.querySelector(".link-wrapper");
menuBar.addEventListener("click", ()=>{
  menuBar.classList.toggle("change");
  dropdown.classList.toggle("changeHeight");
  linkWrapper.classList.toggle("show-wrapper");
})




//type effect

const divWelcome = document.querySelector(".nameEl");
const text = `Hi! i'm Samuel a web/mobile developer`;
function typingEffect(element, text, i=0){
    if(i===0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if (i === text.length -1) {
        return;
    } 

    setTimeout(() => typingEffect(element, text, i+1), 65);
}

typingEffect(divWelcome, text);




//function to make skills box to scroll on arrow click
document.addEventListener("DOMContentLoaded", function() {
    const overflowBox = document.querySelector(".overflow-box");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    leftArrow.addEventListener("click", function() {
        overflowBox.scrollLeft -= 200; // Adjust scroll distance as needed

    });

    rightArrow.addEventListener("click", function() {
        overflowBox.scrollLeft += 200; // Adjust scroll distance as needed
    });
});



//make tab background set on click
function tabClicked() {
    const tabElements = document.querySelectorAll(".tab");

    tabElements.forEach((tabElement) => {
        tabElement.addEventListener("click", () => {
            // Remove background color from all tabs
            tabElements.forEach((element) => {
                element.classList.remove("changeBackground");
            });
            // Add background color to the clicked tab
            tabElement.classList.add("changeBackground");
        });
    });
}
tabClicked();



//tab function
const tabs = document.querySelectorAll('.tab');
const grids = document.querySelectorAll('.projects-grid');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    // Hide all grids
    grids.forEach(grid => {
      grid.style.display = 'none';
    });

    // Deactivate all tabs
    tabs.forEach(t => {
      t.classList.remove('active-tab');
    });

    // Show the clicked grid and activate the clicked tab
    document.getElementById(tabId).style.display = 'grid';
    tab.classList.add('active-tab');
  });
});




//make menubar dissappear when link is clicked

