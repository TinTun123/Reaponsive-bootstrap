const navbar = document.querySelector('.navbar1');
const nav = document.querySelector('.navbar1 .nav1');
const btn = document.querySelector('a .bi-stack');

btn.addEventListener('click', handleClick);

function handleClick() {
  if (navbar.style.display === '') {
    navbar.style.display = 'block';
  }

  if (nav.className === 'nav1 small-screen') {
    nav.classList.add('toggle');
  } else {
    nav.classList.remove('toggle');
  }
}
