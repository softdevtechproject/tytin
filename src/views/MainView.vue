<template>
  <div class="firstblock">
    <h1>TYTIN</h1>
    <p>
      The tastiest and best food only with us. Up to 40% discount for first time
      customers
    </p>
  </div>

  <div class="carousel">
    <button class="carousel__button carousel__button--left is-hidden">
      <img src="/img/left.png" alt="" />
    </button>
    <div class="carousel__track-container">
      <ul class="carousel__track">
        <li class="carousel__slide current-slide">
          <img class="carousel__image" src="/img/sushi.jpg" alt="" />
        </li>
        <li class="carousel__slide">
          <img class="carousel__image" src="/img/essen2.png" alt="" />
        </li>
        <li class="carousel__slide">
          <img class="carousel__image" src="/img/essen3.png" alt="" />
        </li>
      </ul>
    </div>
    <button class="carousel__button carousel__button--right">
      <img src="/img/right.png" alt="" />
    </button>

    <div class="carousel__nav">
      <button class="carousel__indicator current-slide"></button>
      <button class="carousel__indicator"></button>
      <button class="carousel__indicator"></button>
    </div>
  </div>

  <div class="orderlook">
    <div class="order_container">
      <h3>Fast order</h3>
      <h3>Delicious food</h3>
      <h2>TYTIN</h2>
      <div class="buttons">
        <button
          class="olbutton"
          id="menu_button"
          onclick="document.location='/menu' class="nav__link""
        >
          MENU
        </button>
        <button class="olbutton" id="order_button">ORDER</button>
      </div>
    </div>
  </div>

  <div class="pop-up">
    <button class="closeButton" id="closePopupTab">
      <img src="/img/close.png" alt="" />
    </button>
    <h2>TYTIN</h2>
    <div class="submit_text" id="order_text">
      <form action="php/order.php" id="orderForm" target="_blank" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="order">Your order:</label>
        <textarea
          name="order"
          id="order"
          cols="30"
          rows="7"
          form="orderForm"
          required
        ></textarea>
        <label for="address">Address:</label>
        <input type="textarea" name="address" id="address" required />
        <label for="phone">Phone number:</label>
        <input type="tel" name="phone" id="phone" required />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  </div>

  <div class="feedback_look">
    <h2>Feedbacks from our customers</h2>
    <div class="feedback left-text">
      <img src="/img/profile-1.png" alt="" />
      <p class="feedback_text">
        “This restaurant practices a conveyor system for cooking food. In this
        way, all dishes reach their customers promptly and in high quality.“
      </p>
    </div>
    <div class="feedback right-text">
      <img src="/img/profile-2.png" alt="" />
      <p class="feedback_text">
        “Their menu is known to be affordable for almost every customer, as we
        love to dine with everyone who visits our restaurant.“
      </p>
    </div>
    <div class="feedback left-text">
      <img src="/img/profile-3.png" alt="" />
      <p class="feedback_text">
        “What kind of restaurant is this if it doesn't taste good? Of course,
        nothing can be said about their dishes, because they are considered
        exquisite and excellent works of art.“
      </p>
    </div>
    <div class="feedback right-text">
      <img src="/img/profile-4.png" alt="" />
      <p class="feedback_text">
        “I recently stayed with my wife, I really liked everything from the
        setting of the restaurant itself to the delicious dishes. I advise
        everyone to visit this establishment, we will be back.“
      </p>
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

    const popup = document.createElement("script");
    popup.setAttribute("src", "/js/popup.js");
    popup.async = true;
    document.head.appendChild(popup);

    const slideIn = document.createElement("script");
    slideIn.setAttribute("src", "/js/slideIn.js");
    slideIn.async = true;
    document.head.appendChild(slideIn);
  },
};
</script>