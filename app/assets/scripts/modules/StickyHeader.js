import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
    constructor(){
        this.siteMenu = document.querySelector('.header__menu-content')
        this.siteMenuButton = document.querySelector('.header__menu-btn')
        this.siteHeaderLogo = document.querySelector('.header__logo')
        this.pageSections = document.querySelectorAll('.page-section')
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events()
    }

    events(){
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200))
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight
        }, 200))
    }

    runOnScroll(){
        this.determineScrollDirection()
        if (window.scrollY > 100){
            this.siteMenu.classList.add('header__menu-content--scrolled')
            this.siteMenuButton.classList.add('header__menu-btn--scrolled')
            this.siteHeaderLogo.classList.add('header__logo--scrolled')
        } else {
            this.siteMenu.classList.remove('header__menu-content--scrolled')
            this.siteMenuButton.classList.remove('header__menu-btn--scrolled')
            this.siteHeaderLogo.classList.remove('header__logo--scrolled')
        }
        this.pageSections.forEach(el => this.calcSection(el))
    }
    
    determineScrollDirection(){
        if (window.scrollY > this.previousScrollY){
            this.scrollDirection = 'down'
        } else {
            this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY
    }

    calcSection(el){
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
            let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
            if (scrollPercent < 50 && scrollPercent >= 0 && this.scrollDirection == 'down' || scrollPercent < 50 && this.scrollDirection == 'up'){
                let matchingLink = el.getAttribute('data-matching-link')
                document.querySelectorAll(`.header__nav-link:not(${matchingLink})`).forEach(el => el.classList.remove('header__nav-link--is-current-link'))
                if (matchingLink){
                    document.querySelector(matchingLink).classList.add('header__nav-link--is-current-link')
                }
            }
        }
    }

}

export default StickyHeader