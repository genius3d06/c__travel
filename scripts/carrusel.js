var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,  //aqui podemos cambiar cuantas imagenes se pueden mostrar
    spaceBetween: 30,
    loop: true,

    autoplay: {  //Autoplay se usa para reproducir algo automatico con tiempo e retraso
        delay: 2000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true, //Aqui cambiamos desde las flechas las paginas o imagenes
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})