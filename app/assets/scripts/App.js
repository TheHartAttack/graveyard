import '../styles/styles.css'
import 'lazysizes'
import Menu from './modules/Menu'
import Reveal from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new Menu()
new StickyHeader()
new Reveal(document.querySelectorAll('.menu-item'), 75)
new Reveal(document.querySelectorAll('.review'), 75)
let modal

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        if (typeof modal == "undefined"){
            import(/*webpackChunkName: "modal"*/ './modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log('Error'))
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot){
    module.hot.accept()
}