import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  pest = {
    item_id: 1,
    tag: 'PCACAOAPHID',
    plant_affected: 'cacao',
    common_name: 'Aphids',
    order_family: undefined,
    scientific_name: 'Aphis gossypii Glover',
    other_names: 'Cotton aphid, melon aphid, betelvine aphid, green aphid, cucurbit aphid',
    filipino_names: '',
    stages_of_development: 'Nymphs: 7 days; adults: 20days',
    // tslint:disable-next-line:max-line-length
    description: 'The eggs are shiny black and often laid on the bark of fruit trees. The nymphs resembles adult except that they are smaller and wingless. Adult are pear-shaped, color varies from yellowish green, to brownish green, to almost black.',
  // tslint:disable-next-line:max-line-length
    host_range: 'Cacao, citrus, cotton, crucifers, cucurbits, gabi, guava, kapok, kenaf, legumes, lettuce, okra, potato, roselle, solanaceous, sweet potato',
    // tslint:disable-next-line:max-line-length
    damage_characteristics: 'Suck plant sap. Heavy infestation on leaves may result to cupping downwards and wrinkling that may result to wilting. Infested young plants may have reduced or stunted growth.',
    // tslint:disable-next-line:max-line-length
    management_practice: '<b>Cultural method:</b><ol><li>Infested crops should be destroyed immediately after harvest to prevent dispersal.</li><li>If continuous cropping is implicated in retention of aphid population, crop-free period is needed.</li></ol><br/><b>Biological control:</b><ol><li>Release of Braconid wasps.</li></ol>',
    image_url: '',
    citation: ''
  }


  constructor() {

    // console.log('history.state.data :', history.state);



  }

  ngOnInit() {
  }

}
