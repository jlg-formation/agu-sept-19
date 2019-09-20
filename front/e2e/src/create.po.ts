import { browser, by, element } from 'protractor';

export class CreatePage {
  async setName(text: string) {
    const input = element(by.css('input'));
    await input.clear();
    await input.sendKeys(text);
  }

  async clickOnSubmit() {
    const button = element(by.css('button'));
    await button.click();
  }

}
