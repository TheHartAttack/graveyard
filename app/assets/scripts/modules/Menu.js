class Menu {
    constructor(){
        this.menuButton = document.querySelector('.header__menu-btn')
        this.menuContent = document.querySelector('.header__menu-content')
        this.events()
    }

    events(){
        this.menuButton.addEventListener('click', () => this.toggleMenu())
    }

    //Methods
    toggleMenu(){
        this.menuContent.classList.toggle('header__menu-content--is-visible')
        this.menuButton.classList.toggle('header__menu-btn--active')
    }

}

export default Menu