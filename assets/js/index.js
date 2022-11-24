'use strict';
(function () {
    const slider = [...document.querySelectorAll('.slider__body')];

    const arrowNext = document.getElementById("next");

    const arrowBefore = document.getElementById("before");

    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id)
        value = currentElement;
        value += change;

        if (value === 0 || value == slider.length + 1) {
            value = value === 0 ? slider.length : 1;
        }
        slider[currentElement - 1].classList.toggle('slider__body--show');
        slider[value - 1].classList.toggle('slider__body--show');
    }
})()


/*======= MOVE DIVS ANIMATION======= */

let animation = document.querySelectorAll(".animation")

function showOnScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animation.length; i++) {
        let heightAnimation = animation[i].offsetTop;
        if (heightAnimation - 600 < scrollTop) {
            animation[i].style.opacity = 1;
            animation[0].classList.add("showAside");
            animation[1].classList.add("showAside");
            animation[1].style.flexDirection = "row-reverse";
            animation[2].classList.add("showAside");

        }
    }

}
window.addEventListener('scroll', showOnScroll);
