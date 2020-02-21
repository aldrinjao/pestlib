import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        return term ? items.filter(item => item.common_name.indexOf(term) !== -1) : items;

    }
}

