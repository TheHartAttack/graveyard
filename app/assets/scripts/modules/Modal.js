class Modal {

    constructor(){
        this.injectHTML()
        this.modal = document.querySelector('.modal')
        this.closeModalButton = document.querySelector('.modal__close')
        this.contactForm = document.querySelector('.form')
        this.contactFormBody = document.querySelector('.form__body')
        this.contactFormMessage = document.querySelector('.form__message')
        this.events()
    }

    events(){
        this.closeModalButton.addEventListener('click', () => this.closeTheModal())
        document.addEventListener('keyup', e => this.keypressHandler(e))
        this.contactForm.addEventListener('submit', e => this.submitForm(e))
    }

    openTheModal(){
        this.modal.classList.add('modal--is-visible')
    }
    
    closeTheModal(){
        this.modal.classList.remove('modal--is-visible')
        this.contactFormMessage.innerHTML = ''
    }

    keypressHandler(e){
        if (e.keyCode == 27){
            this.closeTheModal()
        }
    }

    submitForm(e){
        e.preventDefault()
        this.contactFormBody.classList.add('form__body--hidden')
        this.contactFormMessage.innerHTML = ''
        this.contactForm.insertAdjacentHTML('beforeend', '<div class="loading"></div>')
        setTimeout(() => {
            document.querySelector('.loading').remove()
            this.contactFormBody.classList.remove('form__body--hidden')
            this.contactFormMessage.innerHTML = `
                <p class="form__message">Thank you - your message has been sent.</p>
            `
        }, 3000)
        
    }

    injectHTML(){
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
        <div class="modal__close">🗙</div>
            <div class="modal__inner">
                <div class="modal__section">
                    <h4 class="modal__title">Phone:</h4>
                    <p class="modal__content">07895667979</p>
                </div>
                <div class="modal__section">
                    <h4 class="modal__title">Email:</h4>
                    <form class="form">
                        <div class="form__body">
                            <div class="form__group">
                                <label>Name:</label>
                                <input class="form__input" type="text">
                            </div>
                            <div class="form__group">
                                <label>Email:</label>
                                <input class="form__input" type="email">
                            </div>
                            <div class="form__group">
                                <label>Message:</label>
                                <textarea class="form__input form__input--text-area"></textarea>
                            </div>
                            <button class="form__button">Send</button>
                            <div class="form__message"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `)
    }

}

export default Modal