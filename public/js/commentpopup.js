var commentButton = document.getElementById("comment_button");
var commentblur = document.querySelector('.about_us_block');
var needdisplays = document.querySelector('.pop-up');
var closeButton = document.getElementById("closePopupTab");

var closePopup = (notblur, hideTab) => {
    notblur.classList.remove('blur');
    hideTab.classList.remove('display');
}
var popup = (blur, display) => {
    blur.classList.add('blur');
    display.classList.add('display');
}

commentButton.addEventListener('click', e => {
    popup(commentblur, needdisplays);
});
closeButton.addEventListener('click', e => {
    closePopup(commentblur, needdisplays);
});