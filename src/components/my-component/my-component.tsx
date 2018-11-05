import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;
  @Prop() Persons : any = {
    mainCategory : 'Temprature',
    subCategory : [
      {name : 'spo2', value : 45, unit : 'Celisius'},
      {name : 'Axilla', value : 42, unit : 'Celisius'},
      {name : 'Rectal', value : 41, unit : 'Celisius'}
    ]
}

  format(): string {
    this.Persons.subCategory
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return (<temp-card></temp-card>);
  }
}
