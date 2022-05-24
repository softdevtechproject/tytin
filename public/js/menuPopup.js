var openMenu = document.getElementById("menuOpen");
var darkenback = document.querySelector(".menu_look");
var headDark = document.getElementById("headnav");
var menu = document.querySelector('.openedMenu');
var closeButton = document.getElementById("menuClose");

var popup = (darken, display) => {
    darken.classList.add('dark');
    display.classList.add('display');
    openMenu.classList.add('hide');
    headDark.classList.add('dark');
}
var closePopup = (notdarken, hideTab) => {
    notdarken.classList.remove('dark');
    hideTab.classList.remove('display');
    openMenu.classList.remove('hide');
    headDark.classList.remove('dark');
}

openMenu.addEventListener('click', e => {
    popup(darkenback, menu);
});
closeButton.addEventListener('click', e => {
    closePopup(darkenback, menu);
});