let openMenuBtn = document.querySelector('.nav_btn') ;
let closeMenuBtn = document.querySelector('.close_btn');
let navBar = document.querySelector('.menu_nav');



const openNavBar = () => {

navBar.style.display='flex';
openMenuBtn.style.visibility='hidden';


}

openMenuBtn.addEventListener('click', openNavBar );



const closeNavBar = () => {

    navBar.style.display='none';
    openMenuBtn.style.visibility='visible';
    
    
    }

    closeMenuBtn.addEventListener('click', closeNavBar );