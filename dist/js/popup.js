var orderButton = document.getElementById("order_button");
var needblurs = document.querySelector('.orderlook');
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

orderButton.addEventListener('click', e => {
    popup(needblurs, needdisplays);
});
closeButton.addEventListener('click', e => {
    closePopup(needblurs, needdisplays);
});