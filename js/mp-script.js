const copyright = document.getElementById('copyright');
copyright.innerText =
    '© ' + new Date().getFullYear() + ' mpcoding   -   👨‍💻 by Maik';

/*On Scroll Effect*/
const allContainers = document.querySelectorAll('#mpEffect');

//Beim Scrollen wird die Funktion ausgeführt.
window.onscroll = function mpFadeIn() {
    allContainers.forEach((container) => {
        const containerTop = container.getBoundingClientRect().top;
        var viewPosition = window.innerHeight / 1.3;

        if (containerTop < viewPosition) {
            container.style.opacity = '1';
            container.style.transform = 'translateX(0)';
            container.style.transition = '.5s ease-in-out';
        } else {
            container.style.opacity = '0';
            container.style.transform = 'translateY(50px)';
            container.style.transition = '.5s ease-in-out';
        }
    });
};
