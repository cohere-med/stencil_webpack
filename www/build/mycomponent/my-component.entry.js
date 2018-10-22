/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyComponent {
    format() {
        return ((this.first || '') +
            (this.middle ? ` ${this.middle}` : '') +
            (this.last ? ` ${this.last}` : ''));
    }
    render() {
        return h("div", null,
            h("ion-card", null,
                h("ion-grid", null,
                    h("ion-row", null,
                        h("ion-col", { "col-4": true }, "name"),
                        h("ion-col", { "col-8": true }, "Shashikant Dwivedi")))));
    }
    static get is() { return "my-component"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        },
        "middle": {
            "type": String,
            "attr": "middle"
        }
    }; }
    static get style() { return "div {\n    background: yellow;\n}"; }
}

export { MyComponent };
