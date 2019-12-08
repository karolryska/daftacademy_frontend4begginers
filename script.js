const concertButtons = [...document.querySelectorAll('.concerts__button')];
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.page-navigation');
const navItems = [...document.querySelectorAll('.page-navigation__item')];
const footer = document.querySelector('.page-footer');
const form = document.querySelector('.form');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('page-navigation--active');
    footer.classList.toggle('page-footer--active');
});


for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('page-navigation--active');
    });
};


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const inputs = [...document.querySelectorAll('.form__input')];

    console.log(Object.fromEntries(formData));

    inputs.forEach(input => {
        input.value = '';
    });
})


concertButtons.forEach(concertButton => {
    concertButton.addEventListener('click', () => {
        concertButton.textContent = 'have fun!';
        concertButton.style.backgroundColor = 'transparent';
        concertButton.style.pointerEvents = 'none';
    })
});