import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './create.po';
import { SetupPage } from './setup.po';
import { AddQuestionPage } from './add-question.po';
import { FinishedPage } from './finished.po';
import { ListPage } from './list.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let createPage: CreatePage;
  let setupPage: SetupPage;
  let addQuestionPage: AddQuestionPage;
  let finishedPage: FinishedPage;
  let listPage: ListPage;

  beforeEach(() => {
    page = new AppPage();
    createPage = new CreatePage();
    setupPage = new SetupPage();
    addQuestionPage = new AddQuestionPage();
    finishedPage = new FinishedPage();
    listPage = new ListPage();
  });

  it('should create a quizz', async () => {
    const quizzName = 'tata';
    page.navigateTo();
    await browser.sleep(500);
    await page.clickOnCreateQuizzButton();
    await browser.sleep(500);
    await createPage.setName(quizzName);
    await browser.sleep(500);
    await createPage.clickOnSubmit();
    await browser.sleep(500);
    await setupPage.clickOnAddQuestionButton();
    await browser.sleep(1000);
    await addQuestionPage.selectCorrectAnswer('B');
    await browser.sleep(1000);
    await addQuestionPage.clickOnSubmit();
    await browser.sleep(1000);
    await setupPage.clickOnFinishButton();
    await browser.sleep(1000);
    await finishedPage.clickOnReturnHomeButton();
    await browser.sleep(1000);
    await page.clickOnDoQuizzButton();
    await browser.sleep(1000);
    const hasButton = await listPage.hasButton(quizzName);
    await browser.sleep(10000);
    expect(hasButton).toBe(true);

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
