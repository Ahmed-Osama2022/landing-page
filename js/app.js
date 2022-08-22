/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define global variables
 */
// The <ul> list 
const nav = document.getElementById('navbar__list'); 
const allSection = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();



/**
 * Start Helper Functions
 * 
*/

// Creating The Navigation Bar:
allSection.forEach((section) => {
    const myNavName = section.getAttribute("data-nav");    
    const myIdNavName = section.getAttribute("id");    

    const linkTag = document.createElement('a');
    const myList = document.createElement('li');
    // Making te list item compatible with other platforms:
    myList.style.fontSize = '10px'
    // Let's now getting the names of my sections by the data attribute:
    linkTag.classList.add('menu__link');
    // Let's create a link :
    linkTag.href = `#${myIdNavName}`;
    linkTag.textContent = myNavName;
    
    // Now let's add some event listener to change the color of the link when it's clicked:
    linkTag.addEventListener('click', function () {
        const changeColor = linkTag;
        changeColor.style.color = 'purple';
    });
    
    // And Let's add another event listener to enable the scroll feature when clicking on the navigation bar sections:
    linkTag.addEventListener('click', function(event) {
        section.scrollBy({
            behavior: "smooth",
        });
    });
    
    // Then Adding or append all of the links to the list items:
    // In another words => add <a> to <li>
    myList.appendChild(linkTag);
    fragment.appendChild(myList);    
});
// Now after added to the fragment, we have to append it to the <ul> list:
nav.appendChild(fragment);



/**
 * Now let's highlights section in viewport upon scrolling:
 * We want to move the class "your-active-class" to which section is being viewed while scrolling through the page.
 * Also we want to highlight the sections in the navigation-bar.
*/

window.addEventListener('scroll', function() {
    // Let's define the Top of the page:
    let scrollPosition = document.documentElement.scrollTop;
    // Now let's loop over the whole sections:
    allSection.forEach((sec)=> {
        const ID = sec.getAttribute('id');
    
        // // Then let's detect our active section:
        const myActiveLink = document.querySelector(`a[href="#${ID}"]`); 
        if (scrollPosition >= sec.offsetTop && scrollPosition < sec.offsetTop + sec.offsetHeight) {
    

            // Now Let's add the class to the setion:
            sec.classList.add('your-active-class');
            // Adding the active class to the link:
            myActiveLink.classList.add('my-active-link');

        } else {
            // Now Let's remove the class:
            sec.classList.remove('your-active-class');
            // And also remove the class from the links in the nav-bar:
            myActiveLink.classList.remove('my-active-link');
        }
    })
})

// const navItems = document.getElementsByClassName('menu_link');

// window.addEventListener('click', function() {
//     nav.forEach()((sec) => {
//         if (true) {
//             sec.classList.add('my-active-link');
//         } else {
//             sec.classList.remove('my-active-link');
//         }
//     })
// })




/**
 * The End of the "Section Active State".
 * the End of helper functions.
 */

