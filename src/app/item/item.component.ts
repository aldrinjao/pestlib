import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  pest = {};
  urltag;
  items: Observable<any[]>;
  filipinoFlag = true;


  constructor(db: AngularFireDatabase, private route: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.items = db.list('items').valueChanges();
    this.urltag = this.route.snapshot.paramMap.get('tag');

    const myObserver = {
      next: x => {
        x.forEach(sample => {

          if (sample.tag === this.urltag) {

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



            this.pest = tempObject;







          }
        });
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    this.items.subscribe(myObserver);
  }

  ngOnInit() {


  }


}
