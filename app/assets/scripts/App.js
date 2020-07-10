import '../styles/styles.css'
import Menu from './modules/Menu'
import Reveal from './modules/RevealOnScroll'

let menu = new Menu()
new Reveal(document.querySelectorAll('.menu-item'), 75)
new Reveal(document.querySelectorAll('.review'), 75)

if (module.hot){
    module.hot.accept()
}