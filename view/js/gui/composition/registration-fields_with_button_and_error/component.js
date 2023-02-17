import template from './template.js'

import '../../component/text-field/component.js'
import '../../component/password-field/component.js'
import '../../component/my-button/component.js'
import '../../component/error-span/component.js'

import {UserFactory} from '../../../domain/user.js'
import {RouterFactory} from "../../route/router.js";

class RegistrationFieldsWithButton extends HTMLElement {

    constructor() {
        console.log('constructor registration-fields_with_button...');
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('connectedCallback registration-fields_with_button...');
        this._render();
    }

    disconnectedCallback() {
        console.log('disconnectedCallback registration-fields_with_button...');
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(attr, prev, next) {
        console.log('attributeChangedCallback registration-fields_with_button...');
    }

    //**********************************

    _listener(event) {
        console.log('registration-fields_with_button clicked');
        event.stopPropagation();
        let login = (this.shadowRoot.childNodes[1].xValue);
        console.log(login)
        let user = UserFactory.createInstance();
        user.setLogin(login);
        let password = (this.shadowRoot.childNodes[3].xValue);
        console.log(password)
        if (user.verify(login, password) === false) {
            this.shadowRoot.childNodes[7].textContent = "Авторизация не прошла"
        }
        else {
            user.setLogin(login)
            this.shadowRoot.childNodes[7].textContent = "Авторизация прошла успешно"
            // let router = RouterFactory.createInstance();
            // router.go('main');
        }
        // let router = RouterFactory.createInstance();
        // router.go('counter');
    }

    _render() {
        console.log('_render registration-fields_with_button...');
        if(!this.ownerDocument.defaultView) return;
        this.shadowRoot.innerHTML = template(this);
        console.log(this.shadowRoot.childNodes[5])
        this.shadowRoot.childNodes[5].addEventListener('click',this._listener.bind(this));
    }
}

customElements.define('registration-fields_with_button', RegistrationFieldsWithButton);
console.log('Log:Defining registration-fields_with_button');//два разных имени, один класс