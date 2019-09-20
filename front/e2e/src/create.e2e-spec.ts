import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './create.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let createPage: CreatePage;

  beforeEach(() => {
    page = new AppPage();
    createPage = new CreatePage();
  });

  it('should create a quizz', async () => {
    page.navigateTo();
    await browser.sleep(1000);
    await page.clickOnCreateQuizzButton();
    await browser.sleep(1000);
    await createPage.setName('tata');
    await browser.sleep(1000);
    await createPage.clickOnSubmit();
    await browser.sleep(1000);
    // expect(page.getTitleText()).toEqual('Quizz');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
