<template>
  <div class="menu_look">
    <h1>TYTIN</h1>
    <div class="menuPopup">
      <img src="/img/1.jpg" alt="menu cover" id="menuOpen" />
    </div>
  </div>

  <div class="openedMenu">
    <button class="closeButton" id="menuClose">
      <img src="/img/close.png" alt="" />
    </button>
    <div class="carousel" id="menuCarousel">
      <button class="carousel__button carousel__button--left is-hidden">
        <img src="/img/left.png" alt="" />
      </button>
      <div class="carousel__track-container">
        <ul class="carousel__track" id="menuImage">
          <li class="carousel__slide current-slide">
            <img class="carousel__image" src="/img/1.jpg" alt="" />
          </li>
          <li class="carousel__slide">
            <img class="carousel__image" src="/img/2.jpg" alt="" />
          </li>
          <li class="carousel__slide">
            <img class="carousel__image" src="/img/3.jpg" alt="" />
          </li>
          <li class="carousel__slide current-slide">
            <img class="carousel__image" src="/img/4.jpg" alt="" />
          </li>
          <li class="carousel__slide">
            <img class="carousel__image" src="/img/5.jpg" alt="" />
          </li>
          <li class="carousel__slide">
            <img class="carousel__image" src="/img/6.jpg" alt="" />
          </li>
          <li class="carousel__slide current-slide">
            <img class="carousel__image" src="/img/7.jpg" alt="" />
          </li>
        </ul>
      </div>
      <button class="carousel__button carousel__button--right">
        <img src="/img/right.png" alt="" />
      </button>

      <div class="carousel__nav" id="menuNav">
        <button class="carousel__indicator current-slide"></button>
        <button class="carousel__indicator"></button>
        <button class="carousel__indicator"></button>
        <button class="carousel__indicator"></button>
        <button class="carousel__indicator"></button>
        <button class="carousel__indicator"></button>
        <button class="carousel__indicator"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const carousel = document.createElement("script");
    carousel.setAttribute("src", "/js/carousel.js");
    carousel.async = true;
    document.head.appendChild(carousel);

    const menuPopup = document.createElement("script");
    menuPopup.setAttribute("src", "/js/menuPopup.js");
    menuPopup.async = true;
    document.head.appendChild(menuPopup);
  },
};
</script>
