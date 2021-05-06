const ham = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar')
ham.addEventListener('click', function () {
  ham.classList.toggle('close');
  sidebar.classList.toggle('navtoggle');
});