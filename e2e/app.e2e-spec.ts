import { DespegarChallengePage } from './app.po';

describe('despegar-challenge App', () => {
  let page: DespegarChallengePage;

  beforeEach(() => {
    page = new DespegarChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
