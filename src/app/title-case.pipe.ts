import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitleCasePipe implements PipeTransform {

  prepositions = ['the', 'of'];

  transform(value: string, args?: any[]) {
    let words: string[];
    if (!value) return null;

    words = value.toLowerCase().split(' ');

    words.forEach((word, index) => {
      if (index == 0 || !this.prepositions.includes(word)) {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1);
      }
    });

    return words.join(' ');
  }
}
