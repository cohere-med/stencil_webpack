import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string = 'Shashikant';
  @Prop() middle: string;
  @Prop() last: string;
  @Prop() rest : string = 'Bingo';
  @Prop() Vitals : any = {
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
      <ion-row>
        <ion-col col-9> 
            <div class="druid-dialogue-vitals">
              <div class="vitalbox-header"> Current vitals </div>      
              <ul class="nav nav-stacked ">
              {this.Vitals.subCategory.map( (vital) =>
                 <div>
                   <li><a><span class="card-list-key ">{vital.name}</span>   <span class="card-list-value "> &nbsp; {vital.value}</span></a></li>
                 </div>
              )}
              </ul>    
            </div>
        </ion-col>
      </ion-row> 
    )
  }
}
