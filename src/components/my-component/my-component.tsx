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
  @Prop() Persons : any = [
    {name : 'Shashikant Dwivedi'},
    {name : 'Meenakshi Tripathi'},
    {name : 'Sanjeev Sanyal'},
    {name : 'Nitin Verma'}
  ]

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return (<div>
     {this.Persons.map( person => 
       <div>
         <ion-card>
          <ion-grid>
            <ion-row>
              <ion-col col-4>
                Name
              </ion-col>
              <ion-col col-8>
                {person.name}
              </ion-col>
            </ion-row>
          </ion-grid>
         </ion-card>
       </div>
     )}
    </div>);
  }
}
