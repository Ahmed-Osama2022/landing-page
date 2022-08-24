/**
 * Define global variables
 * 
 */
const nav = document.getElementById('navbar__list'); 
const allSection = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
*/

// Creating the Navigation function
allSection.forEach((section) => {
    const myNavName = section.getAttribute("data-nav");    
    const myIdNavName = section.getAttribute("id");    
    const linkTag = document.createElement('a');
    const myList = document.createElement('li');
    // Let's now getting the names of my sections by the data attribute:
    linkTag.classList.add('menu__link');
    // Let's create a link :
    linkTag.href = `#${myIdNavName}`;
    
    linkTag.textContent = myNavName;
/**
 * End Main Functions
 * Begin Events
 *
 */    
    // Add event to change the color of the link when it's clicked
    linkTag.addEventListener('click', function () {
        const changeColor = linkTag;
        changeColor.style.color = 'purple';
    });
    // Scroll to section on link click
    linkTag.addEventListener('click', function(event) {
        section.scrollBy({
            behavior: "smooth",
        });
    });
    // Then append all of the links to the list items:
    myList.appendChild(linkTag);
    fragment.appendChild(myList);    
});
// Now after added to the fragment, we have to append it to the <ul> list:
nav.appendChild(fragment);

// styling for the active states with getBoundingClientRect
window.onscroll = function() {
    document.querySelectorAll("section").forEach(function (active) {
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};

//  
window.addEventListener('scroll', function() {
    // Let's define the Top of the page:
    let scrollPosition = document.documentElement.scrollTop;
    // Now let's loop over the whole sections:
    allSection.forEach((sec)=> {
        const ID = sec.getAttribute('id');
    
        // // Then let's detect our active section:
        const myActiveLink = document.querySelector(`a[href="#${ID}"]`); 
        if (
            // scrollPosition >= sec.offsetTop && scrollPosition < sec.offsetTop + sec.offsetHeight
            sec.getBoundingClientRect().top >= -400 &&
            sec.getBoundingClientRect().top <= 150
            ) {

            // Adding the active class to the link:
            myActiveLink.classList.add('my-active-link');

        } else {
            // And also remove the class from the links in the nav-bar:
            myActiveLink.classList.remove('my-active-link');
        }
    })
})

/**
 * The end of events
 * The end of script
 */
