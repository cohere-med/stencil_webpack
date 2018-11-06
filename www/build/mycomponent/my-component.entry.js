/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyComponent {
    constructor() {
        this.first = 'Shashikant';
        this.rest = 'Bingo';
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
        return (h("ion-row", null,
            h("ion-col", { "col-9": true },
                h("div", { class: "druid-dialogue-vitals" },
                    h("div", { class: "vitalbox-header" }, " Current vitals "),
                    h("ul", { class: "nav nav-stacked " }, this.Vitals.subCategory.map((vital) => h("div", null,
                        h("li", null,
                            h("a", null,
                                h("span", { class: "card-list-key " }, vital.name),
                                "   ",
                                h("span", { class: "card-list-value " },
                                    " \u00A0 ",
                                    vital.value))))))))));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
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
        "rest": {
            "type": String,
            "attr": "rest"
        },
        "Vitals": {
            "type": "Any",
            "attr": "vitals",
            "mutable": true
        }
    }; }
    static get style() { return ".wide-as-needed {\n    overflow: scroll;\n    white-space: nowrap;\n}\n  \n.scroll { \n    min-width: 100%;\n}  \n\n.bar.bar-loading {\n    display: block;\n    height: 24px;\n    top: 44px;\n    text-align: center;\n    padding: 0;\n    line-height: 24px;\n  \n    /* transition 'sliding down' (check below)*/\n    -webkit-transition: 200ms all;\n  }\n  \n  \n  /* \n   * make the content's top changes animate.\n   * might not always look good, but looks\n   * good when our loader is added & removed\n   */\n  .has-header {\n    -webkit-transition: 200ms top;\n  }\n\n  .has-header.has-loading {\n    /* 44px (header) + 24px */\n    top: 68px;\n  }\n  \n  /* make loading bar slide up/down */\n  .bar-loading.ng-enter,\n  .bar-loading.ng-leave.ng-leave-active {\n    height: 0;\n    border-width: 0px;\n  }\n  .bar-loading.ng-enter.ng-enter-active,\n  .bar-loading.ng-leave {\n    height: 24px;\n    border-width: 1px;\n  }\n\n  ion-scroll[scrollX] {\n    white-space: nowrap;\n    .scroll-item {\n      display: inline-block;\n    }\n  }  \n\n  ion-scroll.scroll-x .scroll-content::-webkit-scrollbar{\n    display: none;\n  }\n\n  .druid-suggestion-btn{\n    border: 1px solid;\n    border-color: #0388C7;\n    color: #ffffff;\n    background-color: #0388C7;\n    border-radius: 64px;\n    height: 2.8em;\n    font-size: 1.6rem;\n    margin: 0.4rem 0.2rem;\n    padding: 0 1em;\n    height: 32px;\n  }\n\n  .druid-dialogue{\n    border-color: #FFF;\n    background-color: #FFF;\n    border-radius: 4px 24px 24px 24px;\n    font-size: 1.6rem;\n    color: #505050;\n    margin: -2px;\n    padding: 12px;\n    min-height: 40px;\n    max-height: auto;\n    min-width: 22%;\n    margin-left: 12px;\n    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    display: inline-block;\n    margin-left: 2px;\n  }\n\n  .druid-dialogue-response{\n    border-color: #0388c7;\n    background-color: #0388c7;\n    border-radius: 24px 24px 4px 24px;\n    font-size: 1.6rem;\n    color: #ffffff;\n    margin: -2px;\n    padding: 12px;\n    min-height: 40px;\n    max-height: auto;\n    margin-left: 12px;\n    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    min-width: 22%;\n    display: inline-block;\n  }\n\n  .druid-dialogue-vitals{\n    border-color: #FFF;\n    background-color: #FFF;\n    border-radius: 4px 24px 24px 24px;\n    font-size: 1.6rem;\n    color: #505050;\n    margin: -2px;\n    padding: 12px;\n    min-height: 40px;\n    max-height: auto;\n    margin-left: 12px;\n    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    margin-left: 2px;\n  }\n\n  .druid-dialogue-waveform{\n    border-color: #0000;\n    background-color:black;\n    border-radius: 4px 24px 24px 24px;\n    font-size: 1.6rem;\n    color: #505050;\n    margin: -2px;\n    padding: 12px;\n    min-width: 270px;\n    max-width: 270px;\n    margin-left: 12px;\n    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    margin-left: 2px;\n  }\n\n  * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  .maintbox {\n    position:relative;\n    width: 100%;\n  }\n\n  #frm textarea{\n    min-height: 25px;\n    border: 2px solid #ccc;\n    width:100%;\n    resize: none;\n    margin: 0;\n    padding-right:60px;  \n}\n\n#right {\n    position:absolute;\n    top: 8px;\n    right:7px;\n    height: 50px;\n    width: 41px;\n    text-align: center;\n    z-index:1;\n}\n\n#right img {\n  cursor:pointer;\n  vertical-align: middle;\n}\n\n.ion-icon-size {\n    font-size: 45px;\n}\n\n.druid-textarea{\n    padding-left: 10px;\n    color: #505050;\n    width:100%; \n    height:50px; \n    width: 100%;\n    height: 50px;\n    background-color: transparent;\n    -webkit-box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.16);\n    box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.16);\n    background-color: #ffffff;\n    border: solid 1px #E2E2E2;\n}\n\n.druid-navbar .toolbar-background-ios {\n  border-color: #b2b2b2;\n  background: rgb(255, 255, 255);\n}\n\n.druid-navbar .toolbar-background-md {\n  border-color: #b2b2b2;\n  background: rgb(255, 255, 255);\n}\n\n.druid-time{\n  opacity: 0.5;\n  color: #505050;\n  font-size: 10px;\n}\n\n.pull-right{\n  text-align: right;\n  padding-right: 10px;\n}\n\n.card-list-key {\n  display: inline-block;\n  width: 50%;\n  text-align: right;\n  color: #505050;\n  font-size: 16px;\n\n}\n\n.card-list-value,\n{\n    display: inline-block;\n    width: 30%;\n    color: #666;\n    font-weight: 500;\n    font-size: 18px;\n    \n}\n\n.nav-stacked{\n  padding-left: 0px;\n}\n\n.nav-stacked>li:last-of-type {\n  border-bottom: 1px solid #f4f4f4;\n}\n\nli{\n  border-bottom: 1px solid #e4e2e2;\n  padding-top: 10px;\n  height: 40px;\n}\n\nul {\n  list-style-type: none;\n}\n\n.vitalbox-header{\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.1875;\n  letter-spacing: -0.192px;\n  text-align: left;\n  color: #505050;\n}\n\n\n\n.patient-alarm{\n    border: 4px solid #FF1A1A;\n    background: #FF1A1A;\n    border-radius: 12px;\n    text-align: center;\n    font-size: 12px;\n}\n\n.patient-alarm-text{\n    color: white;\n}\n\n.devices-signal{\n    background: #F5F5F5;\n    border-radius: 6px;\n    height: 30px;\n    padding: 0px;\n}\n\n.test1{\n    text-align:right;\n}\n.suggestion-btn-row{\n    height:68px; \n    bottom: 25px; \n    overflow: hidden; \n    padding-top: 2px;\n}\n\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    padding-left: 10px;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    padding-left: 10px;\n  }\n  :-ms-input-placeholder { /* IE 10+ */\n    padding-left: 10px;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    padding-left: 10px;\n  }\n\n  .footer-md::before, .tabs-md[tabsPlacement=\"bottom\"] > .tabbar::before{\n      top: auto;\n      bottom: -5px;\n  }\n\n  .test{\n    padding: 2px;\n  }   \n  \n  .toolbar-icon{\n    font-size: 32px !important;\n    margin-top: 1px;\n    margin-left: -10px;\n  }\n\n.monitoractive{\n    background: #00A773;\n}\n\n.monitorventilator{\n    background: #0261B2;\n}\n\n.monitorinfusionPump{\n    background: #900090;\n    \n}\n\n.monitorlabReports{\n    background: #D6430C;\n}\n\n.inactive{\n  background: #DDDDDD;\n}"; }
}

export { MyComponent };
