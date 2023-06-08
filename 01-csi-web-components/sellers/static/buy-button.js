class BuyButton extends HTMLElement {
    constructor() {
        super();
        this.retrieve = function(count) {
            return new CustomEvent('retrieve', {
                bubbles: true,
                cancelable: false,
                detail: {
                    items: count
                }
            });
        };
    }

    connectedCallback() {
        const text = this.getAttribute('text');
        this.innerHTML = `
            <button id="buy-button" class="buy-button">${text}</button>
        `;
        const button  = document.querySelector('.buy-button');
        // const button  = document.getElementById('buy-button');
        button.addEventListener('click', () => {
            setTimeout(() => {
               const items = Math.floor(Math.random() * 11); 
               this.dispatchEvent(this.retrieve(items)); 
            }, 1_000);
        });
    }
}

window.customElements.define('lc-buy-button', BuyButton);