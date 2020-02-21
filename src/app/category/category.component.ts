import { ChangeDetectionStrategy, Input, Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';




export interface Pest {
  item_id: string;
  entry_type: string;
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
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']

})

export class CategoryComponent implements OnInit {

  items: Observable<any[]>;
  pestsdata: Pest[] = [];
  completepestsdata: Pest[] = [];
  selectpestsdata: Pest[] = [];
  cropTerm = 'Rice';
  pestOrDiseaseTerm = 'All';
  diseaseTypeTerm = 'All';
  disabledFlag = false;

  // change to 23, 31, 48 for 4, 3, 2 on a page
  width = 23;
  p = 1;
  perpage = 20;
  itemperpage = 20;
  term = '';
  prevlabel = 'Prev';
  urlcategory;
  constructor(db: AngularFireDatabase, private route: ActivatedRoute) {
    this.cropTerm = this.route.snapshot.paramMap.get('crop');
    this.items = db.list('items').valueChanges();


    const myObserver = {
      next: x => {
        x.forEach(sample => {
          const tempObject = {

            // insert the id too
            item_id: sample.item_id,
            entry_type: sample.entry_type,
            tag: sample.tag,
            plant_affected: sample.plant_affected,
            common_name: sample.common_name.toLowerCase(),
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
          if (sample.plant_affected === this.cropTerm) {
            this.pestsdata.push(tempObject);
            this.completepestsdata = this.pestsdata;
          }
        });
        this.pestsdata = this.shuffle(this.pestsdata);

      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')


    };

    this.items.subscribe(myObserver);



  }


  ngOnInit() {
    console.log('22');
    this.filterCrop();
    console.log(this.pestsdata.length);
  }

  private shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    let temporaryValue;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  filterCrop() {
    console.log('2');
    this.p = 1;

    if (this.pestOrDiseaseTerm === 'pest') {
      this.disabledFlag = true;
      this.diseaseTypeTerm = 'All';
    } else {
      this.disabledFlag = false;
    }


    let croptemp = this.completepestsdata;
    let cropordiseasetemp = this.completepestsdata;

    if ((this.cropTerm !== 'All')) {
      croptemp = this.completepestsdata.filter(f => {

        return (f.plant_affected === this.cropTerm);
      });
    } else {
      croptemp = this.completepestsdata;
    }

    if ((this.pestOrDiseaseTerm !== 'All')) {
      cropordiseasetemp = this.completepestsdata.filter(f => {

        return (f.entry_type === this.pestOrDiseaseTerm);
      });
    } else {
      cropordiseasetemp = this.completepestsdata;
    }

    // intersect 2 arrays
    const result = croptemp.filter(v => { // iterate over the array
      // check sample present in the second array
      return cropordiseasetemp.indexOf(v) > -1;
      // or array2.includes(v)
    });

    this.pestsdata = result;

  }

  changeitemperpage() {
    this.p = 1;
    this.perpage = this.itemperpage;
  }

  test(event) {
    this.p = event;

  }

  resetfilters() {
    this.p = 1;
    this.perpage = 20;
    this.cropTerm = 'All';
    this.pestOrDiseaseTerm = 'All';
    this.diseaseTypeTerm = 'All';
    this.itemperpage = 20;
    this.term = '';
    this.pestsdata = this.completepestsdata;
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
