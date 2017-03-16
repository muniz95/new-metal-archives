import { NewMetalArchivesPage } from './app.po';

describe('new-meta-archives App', () => {
  let page: NewMetalArchivesPage;

  beforeEach(() => {
    page = new NewMetalArchivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
