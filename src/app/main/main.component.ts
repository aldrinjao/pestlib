import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';




export interface Pest {
  item_id: string;
  tag: string;
  plant_affected: string;
  common_name: string;
  order_family: string;
  scientific_name: string;
  other_names: string;
  filipino_names: string;
  stages_of_development: string;
  description: string;
  host_range: string;
  damage_characteristics: string;
  management_practice: string;
  image_url: string;
  citation: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  items: Observable<any[]>;
  pestsdata: Pest[] = [];

  // change to 23, 31, 48 for 4, 3, 2 on a page
  width = 23;

  constructor(db: AngularFireDatabase) {

    this.items = db.list('items').valueChanges();


    const myObserver = {
      next: x => {
        x.forEach(sample => {

          const tempObject = {

            // insert the id too
            item_id: sample.item_id,
            tag: sample.tag,
            plant_affected: sample.plant_affected,
            common_name: sample.common_name,
            order_family: sample.order_family,
            scientific_name: sample.scientific_name,
            other_names: sample.other_names,
            filipino_names: sample.filipino_names,
            stages_of_development: sample.stages_of_development,
            description: sample.description,
            host_range: sample.host_range,
            damage_characteristics: sample.damage_characteristics,
            management_practice: sample.management_practice,
            image_url: sample.image_url,
            citation: sample.citation
          };
          this.pestsdata.push(tempObject);

        });
        console.log(this.pestsdata);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    this.items.subscribe(myObserver);



  }

  ngOnInit() {
  }

  public removeItems() {
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    this.pestsdata.pop();
    console.log('this.pestdata :', this.pestsdata);
  }

}
