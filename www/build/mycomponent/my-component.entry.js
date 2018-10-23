/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyComponent {
    constructor() {
        this.Persons = [
            { name: 'Shashikant Dwivedi' },
            { name: 'Meenakshi Tripathi' },
            { name: 'Sanjeev Sanyal' },
            { name: 'Nitin Verma' }
        ];
    }
    format() {
        return ((this.first || '') +
            (this.middle ? ` ${this.middle}` : '') +
            (this.last ? ` ${this.last}` : ''));
    }
    render() {
        return (h("div", null, this.Persons.map(person => h("div", { class: "card-color" },
            h("ion-card", null,
                h("ion-grid", null,
                    h("ion-row", null,
                        h("ion-col", { "col-4": true }, "Name"),
                        h("ion-col", { "col-8": true }, person.name))))))));
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
        },
        "Persons": {
            "type": "Any",
            "attr": "persons"
        }
    }; }
    static get style() { return ".card-color{\n\n}"; }
}

export { MyComponent };
