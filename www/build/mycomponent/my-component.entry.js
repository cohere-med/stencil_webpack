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
        return (h("temp-card", null));
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

class MyComponent$1 {
    constructor() {
        this.Vitals = {
            mainCategory: 'Temprature',
            subCategory: [
                { name: 'Oral', value: 45, unit: 'Celisius' },
                { name: 'Axilla', value: 42, unit: 'Celisius' },
                { name: 'Rectal', value: 41, unit: 'Celisius' }
            ]
        };
    }
    format() {
        return ((this.first || '') +
            (this.middle ? ` ${this.middle}` : '') +
            (this.last ? ` ${this.last}` : ''));
    }
    render() {
        return (h("ion-card", null,
            h("span", null, this.Vitals.mainCategory),
            this.Vitals.subCategory.map(vital => h("ion-grid", null,
                h("ion-col", { "col-4": true }, vital.name),
                h("ion-col", { "col-8": true }, vital.value)))));
    }
    static get is() { return "temp-card"; }
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
        "Vitals": {
            "type": "Any",
            "attr": "vitals",
            "mutable": true
        }
    }; }
    static get style() { return ""; }
}

export { MyComponent, MyComponent$1 as TempCard };
