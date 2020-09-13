new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    effect: 'overflow',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


const { styler, spring, listen, pointer, value } = window.popmotion;

const myBrand = document.querySelector('.brand');
const divStyler = styler(myBrand);
const myBrandXY = value({ x: 0, y: 0 }, divStyler.set);

listen(myBrand, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(myBrandXY.get()).start(myBrandXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: myBrandXY.get(),
            velocity: myBrandXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            // mass: 1,
            // damping: 10
        }).start(myBrandXY);
    });