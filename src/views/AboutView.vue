<template>
  <div class="about_us_block">
    <h1>TYTIN</h1>
    <h2>
      Our chefs come from the capital of France, Paris, to surprise you with the
      most exquisite dishes.
    </h2>
    <div class="cook_container">
      <h3>Mr. Schneider Hoffman</h3>
      <p>
        Mr. Hochmann is known not only in France, but also in many European
        countries. He is famous around the world for having the Russian
        President Vladimir Vladimirovich Putin praising his food. Born and
        raised on the streets of Paris and well versed in the aesthetics of
        French food.
      </p>
      <div class="comment_button" id="comment_button">
        <button class="comments">Leave comment</button>
      </div>
    </div>
  </div>
  <div class="pop-up" id="aboutUs">
    <button class="closeButton" id="closePopupTab">
      <img src="/img/close.png" alt="" />
    </button>
    <h2>TYTIN</h2>
    <p class="opinionp">Write your opinion about our chef:</p>
    <div class="submit_text" id="comment_text">
      <form
        method="post"
        action="php/comment.php"
        id="commentForm"
        target="_blank"
      >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="phone">Phone number:</label>
        <input type="tel" name="phone" id="phone" required />
        <label for="comments">Comments:</label>
        <textarea
          name="comments"
          id="comments"
          cols="30"
          rows="7"
          form="commentForm"
          required
        ></textarea>
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const commentpopup = document.createElement("script");
    commentpopup.setAttribute("src", "/js/commentpopup.js");
    commentpopup.async = true;
    document.head.appendChild(commentpopup);
  },
};
</script>