import { browser, by, element } from 'protractor';

export class AddQuestionPage {

  async selectCorrectAnswer(text: string) {
    const input = element(by.css(`input[type="radio"][ng-reflect-value="${text}"]`));
    await input.click();
  }

  async clickOnSubmit() {
    const button = element(by.css('button.primary'));
    await button.click();
  }



}
