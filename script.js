const concertButtons = [...document.querySelectorAll('.concerts__button')];
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.page-navigation');
const navItems = [...document.querySelectorAll('.page-navigation__item')];
const footer = document.querySelector('.page-footer');
const form = document.querySelector('.form');


const menuAction = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('page-navigation--active');
    footer.classList.toggle('page-footer--active');
};


hamburger.addEventListener('click', menuAction);


for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', menuAction);
};


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    const inputs = [...document.querySelectorAll('.form__input')];

    console.log(`E-mail: ${formValues.email}`);
    console.log(`Topic: ${formValues.topic}`);

    inputs.forEach(input => {
        input.value = '';
    });
})


concertButtons.forEach(concertButton => {
    const haveFun = document.createElement('span');
    haveFun.innerText = 'have fun!';
    haveFun.classList.add('concerts__bought');
    concertButton.addEventListener('click', () => {
        concertButton.replaceWith(haveFun);
    })
});