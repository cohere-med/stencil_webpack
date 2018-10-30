import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'temp-card',
  styleUrl: 'temprature-component.css',
  shadow: true
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
      <ion-row>
        <ion-col col-1>
            <img src="assets/imgs/druid_chat.svg" />
        </ion-col>
        <ion-col col-9> 
            <div class="druid-dialogue-vitals">
              <div class="vitalbox-header"> Current vitals </div>      
              <ul class="nav nav-stacked ">
                  <li><a><span class="card-list-key ">Heartrate</span>   <span class="card-list-value "> &nbsp; 48</span></a></li>
                  <li><a><span class="card-list-key ">SpO2 </span>       <span class="card-list-value "> &nbsp; 91</span></a></li>
                  <li><a><span class="card-list-key ">Temprature </span> <span class="card-list-value "> &nbsp;38 </span></a></li>
                  <li><a><span class="card-list-key ">NIBP</span>        <span class="card-list-value "> &nbsp; 89 </span></a></li>
                  <li><a><span class="card-list-key ">RR</span>          <span class="card-list-value "> &nbsp; 121 </span></a></li>
              </ul>    
            </div>
        </ion-col>
      </ion-row> 
    )
  }
}

{/* <ion-card class = "card-component">
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
        </ion-card> */}