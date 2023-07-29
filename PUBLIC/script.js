/* ====================================================================================================================
  ================================   LINK ACTIVE NAV   ================================================================
  ==================================================================================================================== */
const linkNav = document.querySelectorAll('.NAV_LI')

function ACTIVE(){
    if(linkNav){
        linkNav.forEach(l=> l.classList.remove('ACTIVE'))
        this.classList.add('ACTIVE')
    }
}
linkNav.forEach(l=> l.addEventListener('click',ACTIVE))
/* ====================================================================================================================
  ================================   ASIDE NAV BAR   ==================================================================
  ==================================================================================================================== */
const ASIDE_TOGGLER = document.querySelector(".NAV_TOGGLER");
ASIDE_TOGGLER.addEventListener("click", () => {
    document.querySelector(".ASIDE").classList.toggle("ASIDE_OPEN");
})
//hide ASIDE NAV BAR on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".ASIDE").classList.contains("ASIDE_OPEN"))
    {
        document.querySelector(".ASIDE").classList.remove("ASIDE_OPEN");
    }
})
/* ====================================================================================================================
================================   STYLE SWITCHER   ===================================================================
==================================================================================================================== */
const styleSwitcherToggle = document.querySelector(".STYLE_SWITCHER_TOGGLER");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".STYLE_SWITCHER").classList.toggle("OPEN");
})
//hide STYLE SWITCHER on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".STYLE_SWITCHER").classList.contains("OPEN"))
    {
        document.querySelector(".STYLE_SWITCHER").classList.remove("OPEN");
    }
})
/* ====================================================================================================================
  ================================   THEME CHANGER   ==================================================================
  ==================================================================================================================== */

/*============================== red theme Toggle =====================================*/
const ThemeColorToggle1 = document.querySelector(".c1");
ThemeColorToggle1.addEventListener("click", () => {
    document.querySelector("body").classList.remove("theme_purple");
    document.querySelector("body").classList.remove("theme_yellow");
    document.querySelector("body").classList.remove("theme_blue");
    document.querySelector("body").classList.remove("theme_green");

    document.querySelector("body").classList.add("theme_red");
    document.querySelector(".STYLE_SWITCHER").classList.toggle("OPEN");
})

/*============================== purple theme Toggle =====================================*/
const ThemeColorToggle2 = document.querySelector(".c2");
ThemeColorToggle2.addEventListener("click", () => {
    document.querySelector("body").classList.remove("theme_red");
    document.querySelector("body").classList.remove("theme_yellow");
    document.querySelector("body").classList.remove("theme_blue");
    document.querySelector("body").classList.remove("theme_green");

    document.querySelector("body").classList.add("theme_purple");
    document.querySelector(".STYLE_SWITCHER").classList.toggle("OPEN");
})

/*============================== yellow theme Toggle =====================================*/
const ThemeColorToggle3 = document.querySelector(".c3");
ThemeColorToggle3.addEventListener("click", () => {
    document.querySelector("body").classList.remove("theme_purple");
    document.querySelector("body").classList.remove("theme_red");
    document.querySelector("body").classList.remove("theme_blue");
    document.querySelector("body").classList.remove("theme_green");

    document.querySelector("body").classList.add("theme_yellow");
    document.querySelector(".STYLE_SWITCHER").classList.toggle("OPEN");
})

/*============================== blue theme Toggle =====================================*/
const ThemeColorToggle4 = document.querySelector(".c4");
ThemeColorToggle4.addEventListener("click", () => {
    document.querySelector("body").classList.remove("theme_purple");
    document.querySelector("body").classList.remove("theme_yellow");
    document.querySelector("body").classList.remove("theme_red");
    document.querySelector("body").classList.remove("theme_green");

    document.querySelector("body").classList.add("theme_blue");
    document.querySelector(".STYLE_SWITCHER").classList.toggle("OPEN");
})

/*============================== green theme Toggle =====================================*/
const ThemeColorToggle5 = document.querySelector(".c5");
ThemeColorToggle5.addEventListener("click", () => {
    document.querySelector("body").classList.remove("theme_purple");
    document.querySelector("body").classList.remove("theme_yellow");
    document.querySelector("body").classList.remove("theme_blue");
    document.querySelector("body").classList.remove("theme_red");

    document.querySelector("body").classList.add("theme_green");
    document.querySelector(".STYLE_SWITCHER").classList.toggle("OPEN");
})
/* ====================================================================================================================
  ================================   LIGHT | DARK MODE   ==============================================================
  ==================================================================================================================== */

/*============================== Light|Dark Mode Toggle =====================================*/
const LightDarkToggle = document.querySelector(".DL_ICON");
const DAY_NIGHT = document.querySelector(".DAY_NIGHT");

var DARK_MODE;

if(localStorage.getItem('DARK_MODE')){
    DARK_MODE = localStorage.getItem('DARK_MODE');
}
else
{
    DARK_MODE = 'LIGHT';
}

localStorage.setItem('DARK_MODE', DARK_MODE);

if(localStorage.getItem('DARK_MODE') == 'DARK')
{
    document.body.classList.add("DARK")

    DAY_NIGHT.querySelector("i").classList.remove("fa-moon");
        
    DAY_NIGHT.querySelector("i").classList.add("fa-sun");
}


LightDarkToggle.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("DARK");
    if(document.body.classList.contains("DARK"))
    {
        DAY_NIGHT.querySelector("i").classList.remove("fa-moon");
        
        DAY_NIGHT.querySelector("i").classList.add("fa-sun");

        document.querySelector(".STYLE_SWITCHER").classList.remove("OPEN");

        localStorage.setItem('DARK_MODE','DARK');
    }
    else
    {
        DAY_NIGHT.querySelector("i").classList.remove("fa-sun");
        
        DAY_NIGHT.querySelector("i").classList.add("fa-moon");

        document.querySelector(".STYLE_SWITCHER").classList.remove("OPEN");

        localStorage.setItem('DARK_MODE','LIGHT');
    }
})
/* ====================================================================================================================
  ================================   TYPING ANIMATION   ==============================================================
  ==================================================================================================================== */
var typed = new Typed(".TYPING",{
    strings:["Web Developer.","Software Developer.","Graphic Designer.","Pencil Art Artist.","Speed Skater.","Legit Networker.","Freelancer."],
    typeSpeed:100,
    BackSpeed:70,
    loop:true
})
/*====================================================================================================================
================================   POP UP   =========================================================================
====================================================================================================================*/
const OPEN_POP_UP = document.querySelector(".BTN_SEND");
OPEN_POP_UP.addEventListener("click", () => {
    document.querySelector(".POP_UP").classList.add("openPopup");
})
const CLOSE_POP_UP = document.querySelector(".BTN_OK");
CLOSE_POP_UP.addEventListener("click", () => {
    document.querySelector(".POP_UP").classList.remove("openPopup");
})
//hide POP UP on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".POP_UP").classList.contains("openPopup"))
    {
        document.querySelector(".POP_UP").classList.remove("openPopup");
    }
})