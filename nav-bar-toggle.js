const list_group1 = document.querySelector('.navbar1 .nav1');
const lists = document.querySelectorAll('.navbar1 .nav1 li a');

list_group1.addEventListener('click', toggleClick);

function toggleClick(e) {
  Object.keys(lists).map((key) => {
    lists[key].className = '';
  });
  const ele = e.target;
  if (ele.className === '') {
    ele.classList.add('active');
  } else {
    ele.classList.remove('active');
  }
}
