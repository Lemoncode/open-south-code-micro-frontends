class UserWelcone extends HTMLElement {
    constructor() {
        super();
        this._name = null;
    }

    static get observedAttributes() {
        return ['name'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attrName] = newValue;
        }

        this._render();
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value === this._name) {
            return;
        }

        this._name = value;
    }

    _render() {
        this.innerHTML = `
            <div class="user-container">Welcome ${this.name}!</div>
        `;
    }

    connectedCallback() {
        this._render();
    }
}

window.customElements.define('lc-user-welcome', UserWelcone);