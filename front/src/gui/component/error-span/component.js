import template from './template.js'

class ErrorSpan extends React.Component {

    constructor(props) {
        console.log('constructor error-span...');
        super(props);
        this.attachShadow({ mode: 'open' });
    }

    componentDidMount() {
        console.log('connectedCallback error-span...');
        this._render();
    }

    componentWillUnmount() {
        console.log('disconnectedCallback error-span...');
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(attr, prev, next) {
        console.log('attributeChangedCallback error-span...');
    }

    //**********************************

    _render() {
        console.log('_render error-span...');
        if(!this.ownerDocument.defaultView) return;
        this.shadowRoot.innerHTML = template(this);
    }
}

customElements.define('error-span',ErrorSpan);
console.log('Log:Defining error-span');