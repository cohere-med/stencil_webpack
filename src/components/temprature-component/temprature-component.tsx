import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'temp-card',
  styleUrl: 'temprature-component.css',
  shadow: false
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;
  @Prop({mutable : true}) Vitals : any = {
      mainCategory : 'Temprature',
      subCategory : [
        {name : 'Oral', value : 45, unit : 'Celisius'},
        {name : 'Axilla', value : 42, unit : 'Celisius'},
        {name : 'Rectal', value : 41, unit : 'Celisius'}
      ]
  }

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return (
        <ion-card>
            <span>{this.Vitals.mainCategory}</span>
            {this.Vitals.subCategory.map( vital => 
                <ion-grid>
                <ion-col col-4>
                  {vital.name}
                </ion-col>
                <ion-col col-8>
                  {vital.value}
                </ion-col>
             </ion-grid>
            )}
        </ion-card>
    )
  }
}
