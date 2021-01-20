const navbar = document.querySelector('.navbar');
const nav = document.querySelector('.navbar .nav');
const btn = document.querySelector('a .bi-stack');

btn.addEventListener('click', handleClick);

function handleClick() {
  console.log(navbar.style.display);

  if (navbar.style.display === '') {
    navbar.style.display = 'block';
  }

  console.log(navbar.style.display);

  console.log(nav.className);

  if (nav.className === 'nav small-screen') {
    nav.classList.add('toggle');
  } else {
    nav.classList.remove('toggle');
  }
}
