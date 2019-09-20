import { browser, by, element } from 'protractor';

export class ListPage {

  async hasButton(quizzName: string) {
    const texts = await element.all(by.css('button')).getText();
    const isExisting = texts.includes(quizzName);
    return isExisting;
  }

}
