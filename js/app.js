//UI
const navbuttons = document.querySelector('.navbuttons');

navbuttons.addEventListener('click',()=>{
	navbuttons.classList.toggle('changes');
});

const navmenus = document.querySelector('.navmenus');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
	let getscrolly = window.scrollY;

	// console.log(getscrolly);
	if (getscrolly >= 550) {
       navbar.classList.add('navmenus');
	}else{
		navbar.classList.remove('navmenus');
	}
})