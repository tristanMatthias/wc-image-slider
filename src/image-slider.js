import HTML from './image-slider.html';
import css from './image-slider.scss';

// Create an ES6 Class for the custom element that extends the base class
// HTMLElement.
export default class ImageSlider extends HTMLElement {
    constructor() {
        super();
        this._index = 0;
        this._time = '0.5s';

        // Create the shadow dom
        this.shadow = this.attachShadow({mode: 'closed'});
        this.shadow.innerHTML = HTML;
        // Append the styles
        this.shadow.appendChild(this.style);
        this.slider = this.shadow.querySelector('.slider');
    }

    static get observedAttributes() {
        return [
            'time'
        ];
    }

    // -------------------------------------------------------------- Life-cycle
    connectedCallback() {

        this.tick();
    }
    attributeChangedCallback(attr, oldV, newV) {
        switch (attr) {
            case 'time':
                this.time = newV;
        }
    }

    // -------------------------------------------------------------- Properties
    get time() { return this._time; }
    set time(v) {
        this._time = v;
        this.slider.style.transitionDuration = v;
    }

    get index() { return this._index; }
    set index(v) {
        this._index = v;
        // For looping
        if (this._index >= this.childElementCount) this.index = 0;
        if (this._index < 0) this.index = this.childElementCount - 1;
    }

    get style() {
        const style = document.createElement('style');
        style.innerHTML = css;

        return style;
    }

    // ----------------------------------------------------------------- Methods
    // Tick the slider over
    tick() {
        this.index += 1;
        Array.from(this.children).forEach(i => i.classList.add('hide'));
        this.children[this.index].classList.remove('hide');
        setTimeout(this.tick.bind(this), parseFloat(this.time) * 1000);
    }
}


/* Register the class as a custom element on the dom.
 * This element can then be used in html.
 * EG:
 *  <image-slider />
 */
window.customElements.define('image-slider', ImageSlider);
