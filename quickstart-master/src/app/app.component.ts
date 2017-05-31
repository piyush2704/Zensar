import { Component ,ViewEncapsulation,AfterViewInit ,ViewChild,ElementRef } from '@angular/core';
import { FormGroup,FormControl }            from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  styleUrls:['app/app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {

constructor(private elementRef: ElementRef) { }
_editFlag= false;
id=4;
_loadData = {
  id:"",
  type:"",
  price:"",
  newForm:"",
  usedFrom:""
};
      Data =[{
              id:"1",
              type:"Hardcover",
              price:"R 300.00",
              newForm:"R 334.99",
              usedFrom:"269.99",
              },
              {
                id:"2",
              type:"PaperBack",
              price:"R 300.00",
              newForm:"R 334.99",
              usedFrom:"269.99",
              },
              {
               id:"3", 
              type:"Audio,CD,Audiobook",
              price:"R 300.00",
              newForm:"R 334.99",
              usedFrom:"269.99",
              },
              {
               id:"4", 
              type:"Unknown Binding",
              price:"R 300.00",
              newForm:"R 334.99",
              usedFrom:"269.99",
            }];

          /* _edit(data:any)
          {
            this._editFlag= true;
            console.log(data);
            this._loadData = data;
          }*/
          _delete(e:any)
          {
            this.Data = this.Data.filter(item => item !== e);
            
          }
          save(e:any)
          {
          if(e.valid && !this._editFlag)
          {
            this.id++;
            this.Data.push(e.value);
            console.log(e);
            }
           
          }
}
