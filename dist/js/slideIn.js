var sliders = document.querySelectorAll(".order_container");
var feedbacksliders = document.querySelectorAll(".feedback");

var appearOptions = {
  threshold: 0, 
  rootMargin: "20px"
};

var appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

feedbacksliders.forEach(feedbackslider => {
  appearOnScroll.observe(feedbackslider);
});
