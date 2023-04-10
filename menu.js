function menuShow() {
    let MenuMobile = document.querySelector('.mobile-pag');
    if (MenuMobile.classList.contains('open')) {
        MenuMobile.classList.remove('open');
        document.querySelector('.icon').src = "estilo/menu-mobile.png";
    } else {
        MenuMobile.classList.add('open');
        document.querySelector('.icon').src = "estilo/fechar.png"
    }
}