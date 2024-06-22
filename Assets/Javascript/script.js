// open and closed menu
function clickMenu() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = '/Assets/IMG/menu_white_36dp.svg'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = '/Assets/IMG/close_white_36dp.svg'

    }

}



