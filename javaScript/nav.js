export function setupMobileNav() {
  const menuIcon = document.getElementById('menu-icon');
  const navBar = document.querySelector('.nav-bar');
  if (!menuIcon || !navBar) return;

  menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
    menuIcon.classList.toggle('open');
  });

  navBar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navBar.classList.remove('active');
      menuIcon.classList.remove('open');
    });
  });
}

// Mobile navigation toggle
/*const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('active');
  menuIcon.classList.toggle('open');

});

navBar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
    menuIcon.classList.remove('open');
  });
});*/